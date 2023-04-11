import { ApplicationCharge } from "./applicationcharge";
import { InlineScript } from "./inlinescript";
import { Script } from "./script";
import { ScriptDeprecated } from "./scriptdeprecated";
import { Uninstallation } from "./uninstallation";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.shop-pro.jp"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * # カラーミーショップアプリストア API
 *
 * @remarks
 *
 * [アプリストア](https://app.shop-pro.jp/)にて公開するアプリに対して、一般公開している[カラーミーショップAPI](https://developer.shop-pro.jp/docs/colorme-api)に加えて、カラーミーショップアプリストアAPI（以下、アプリストアAPIといいます）を利用することが出来ます。アプリストアAPIでは以下のことが行えます。
 * - 課金データ(アプリ内課金、従量課金)の作成
 * - インラインスクリプトタグの取得・作成・更新・削除
 * - スクリプトタグの取得・作成・更新・削除
 *
 * ## 利用手順
 *
 * アプリストアAPIを利用するには、OAuth認証が必要です。OAuth認証の基本的な流れについては[カラーミーショップAPIドキュメント](https://developer.shop-pro.jp/docs/colorme-api)を参照してください。
 * アプリストアAPIの利用のために、以下のscopeが追加で指定可能になります。[カラーミーショップAPIドキュメント](https://developer.shop-pro.jp/docs/colorme-api)に掲載されているscopeと合わせてご利用ください。
 *
 * |スコープ|機能|
 * |---|---|
 * |`write_application_charge`|課金データの作成|
 * |`read_shop_script_tags`|ショップページのスクリプトタグを参照|
 * |`write_shop_script_tags`|ショップページへスクリプトタグを追加・更新|
 * |`read_inline_script_tags`|インラインスクリプトタグを参照|
 * |`write_inline_script_tags`|インラインスクリプトタグを追加・更新|
 * |`read_script_tags`|スクリプトタグを参照(deprecated)|
 * |`write_script_tags`|スクリプトタグを追加・更新(deprecated)|
 *
 * (例) カラーミーショップアカウントの認証ページを表示
 * ```
 * https://api.shop-pro.jp/oauth/authorize?client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&response_type=code&scope=read_products%20write_products%20write_application_charge
 * ```
 *
 * ## 課金設定
 * 料金プラン（月額課金・従量課金・買い切り）による課金や、アプリ内課金をご利用いただくにはアプリごとに課金設定の登録が必要です。
 * この設定は [カラーミーショップ デベロッパー](https://developer.shop-pro.jp) から行うことができます。
 *
 * 登録できる課金形式やその使い方の詳細については[アプリストア 開発ガイドのアプリ課金のページ](https://developer.shop-pro.jp/getting-started/appstore-billing/)をご覧ください
 *
 * ## アプリのインストール
 * ショップオーナーがアプリをインストールしたとき、以下の処理をカラーミーショップが行います。
 * - 選択された料金プランに基づき課金開始
 * - インストールフックの呼び出し
 *
 * ### インストールフック
 * アプリのインストール時に、インストールに関する情報を `POST` メソッド、 `application/json` 形式で通知します。
 * 通知先のURLは[カラーミーショップ デベロッパー](https://developer.shop-pro.jp/)にログインし、各アプリストア アプリのアプリ設定から登録を行ってください。
 *
 * 以下のパラメータが送信されます。課金請求に必要なパラメータを含みますので、必ず受け取れるようにしてください。
 *
 * |パラメータ|機能|形式|
 * |---|---|---|
 * |`account_id`|インストールしたショップオーナーのアカウントID|PA+8桁の整数|
 * |`application_charge_source_id`|プラン課金ID|数字と大文字アルファベットで構成される文字列(6桁以上)|
 * |`recurring_application_charge_id`|（買い切り以外の課金の場合）課金契約ID|数字と大文字アルファベットで構成される文字列(6桁以上)|
 * |`application_charge_id`|（買い切りの場合）課金契約ID|数字と大文字アルファベットで構成される文字列(6桁以上)|
 * |`trial_term`|（無料お試し期間がある場合）無料お試し期間|JSONオブジェクト|
 * |`mail`|ショップオーナーへの連絡メールアドレス|文字列|
 *
 * `application_charge_source_id` はデベロッパーサイトで設定したプラン課金のIDです。インストールされた料金プランの判別にご利用いただけます。
 *
 * `recurring_application_charge_id` と `application_charge_id` はインストールごとに発行されるユニークなIDです。ショップオーナーが一度アンインストールした後に、再度同じショップオーナーがアプリのインストールを行った際には新たに別のIDが発行されます。
 *
 * `recurring_application_charge_id` は「買い切り」以外の課金である「無料」「月額」「月額＋従量」「月額＋初期費用」「従量のみ」のプラン課金のインストールの際に発行されます。
 *
 * 従量による課金を伴うプラン課金の場合は、従量分の料金を請求する際に 課金契約ID(`recurring_application_charge_id`) が必要になるので、必ず記録するようにしてください。
 *
 * `mail` パラメータの値はショップオーナーへの連絡手段としてご利用いただけます。インストール後に認可フローが中断され、アクセストークンが得られない際のショップオーナーへの連絡手段としてご活用いただけます。このパラメータはカラーミーショップの非公開情報として登録されている値です。左記以外の用途でこの値をアプリの機能で使用しないでください。
 *
 * 例) 買い切りの場合
 * ```
 * {
 *   "account_id": "PA00000001",
 *   "application_charge_source_id": "F3RN9A",
 *   "application_charge_id": "A3FT4N",
 *   "mail": "shop@example.com"
 * }
 * ```
 *
 * 例) 月額課金の場合
 * ```
 * {
 *   "account_id": "PA00000001",
 *   "application_charge_source_id": "F3RN9A",
 *   "recurring_application_charge_id": "A3FT4N",
 *   "mail": "shop@example.com"
 * }
 * ```
 *
 * 無料お試し期間を設定した課金の場合、以下の情報を `trial_term` パラメータとして送信します。
 * 無料お試し期間中は従量課金APIを呼び出して課金請求することはできません。
 *
 * |パラメータ|機能|形式|
 * |---|---|---|
 * |`starts_at`|無料お試し開始日時|整数値(UNIXタイムスタンプ)|
 * |`ends_at`|無料お試し終了日時|整数値(UNIXタイムスタンプ)|
 *
 * 例) 無料お試し期間がある月額課金の場合
 * ```
 * {
 *   "account_id": "PA00000001",
 *   "application_charge_source_id": "F3RN9A",
 *   "recurring_application_charge_id": "A3FT4N",
 *   "mail": "shop@example.com",
 *   "trial_term" {
 *     "starts_at": 1565017200,
 *     "ends_at": 1567609200
 *   }
 * }
 * ```
 *
 * 受け取りに成功した場合は、以下のパラメータを `application/json` 形式でレスポンスボディに付与し、
 * ステータスコード `200` レスポンスをカラーミーショップへ返却してください。
 * ステータスコード `200` レスポンスをカラーミーショップが受け取れない場合、もしくは以下のパラメーターが返却されなかった場合、インストールを中止し、インストールによって発生した情報は破棄されます。
 *
 * |パラメータ|機能|形式|
 * |---|---|---|
 * |`redirect_url`|インストール成功後に遷移するURL|文字列（URL）|
 *
 * 例)
 * ```
 * {
 *   "redirect_url": "https://example.com"
 * }
 * ```
 * インストール完了後、インストールフックのレスポンスパラメータの `redirect_url` へ画面遷移しますので、APIを利用する場合は `redirect_url` より先の画面でOAuth認証の実装をお願いします。
 *
 * ## アプリのアンインストール
 * ショップオーナーがアプリをアンインストールしたとき、以下の処理をカラーミーショップが行います。
 * - OAuth認証のアクセストークンの無効化
 * - 登録したインラインスクリプトタグ・スクリプトタグの削除
 * - 月額課金形式の場合、継続課金の無効化
 *
 * ### アンインストールフック
 * アンインストール直後に `POST` メソッドで、以下の情報を `application/json` 形式で通知します。
 * 通知先のURLは[カラーミーショップ デベロッパー](https://developer.shop-pro.jp/)にログインし、各アプリストア アプリのアプリ設定から登録を行ってください。
 *
 * ※ [アンインストールAPI](#operation/deleteInstallation)のご利用によるアンインストール時はアンインストールフックは通知されません。
 *
 * 受け取りに成功した場合はステータスコード `200` のレスポンスを返却してください。
 *
 * |パラメータ|機能|形式|
 * |---|---|---|
 * |`account_id`|アンインストールしたショップオーナーのアカウントID|PA+8桁の整数|
 * |`application_charge_source_id`|プラン課金ID|数字と大文字アルファベットで構成される文字列(6桁以上)|
 * |`uninstalled_at`|アンインストール日時|整数値(UNIXタイムスタンプ)|
 * |`reason`|アンインストール理由| `by_shop_owner` (ショップオーナーによる)<br /> `by_unpaid` (未払いによる) |
 * |`recurring_application_charge_id`|（買い切り以外の課金の場合）課金契約ID|数字と大文字アルファベットで構成される文字列(6桁以上)|
 * |`usage_charge`|（従量課金の場合）従量課金アンインストール情報|JSONオブジェクト|
 *
 * アンインストールフックの通知が伴うアンインストールは以下の操作のいずれかによって行われます。アンインストールの理由を `reason` パラメータで確認できます。
 *
 * |reasonパラメータの値|アンインストール理由|
 * |---|---|
 * |`by_shop_owner`|ショップオーナーによるアンインストール操作|
 * |`by_unpaid`|ポイント不足による利用料徴収の失敗による自動アンインストール|
 *
 * 課金契約ID `recurring_application_charge_id` はインストールフックで通知したIDと同じIDが通知されます。
 *
 * 料金プランが従量課金の場合、アンインストール後に従量課金データの作成を可能にするために、以下の情報を `usage_charge` パラメータとして送信します。
 * アンインストール後はOAuthのアクセストークンが無効化されているため、アクセストークンを利用して従量課金APIを呼び出すことができなくなります。
 * アンインストール後はアクセストークンの代わりに `api_token` をリクエストヘッダーに含め、従量課金APIを呼び出してください。
 * 無料お試し期間中にアプリがアンインストールされた場合は、`api_token` は発行されません。
 * 詳しくは、[従量課金データの作成](https://app.shop-pro.jp/open_api#operation/createUsageCharge)を参照してください。
 * `api_token` を利用した従量課金APIの呼び出しは、ポイント締め日 `closing_on` までとなっておりますので、ご注意ください。
 *
 * |パラメータ|機能|形式|
 * |---|---|---|
 * |`api_token`|アンインストール後に従量課金APIを利用いただくために必要な情報|文字列|
 * |`closing_on`|ポイント締め日|整数値(UNIXタイムスタンプ)|
 *
 * 通常、 `closing_on` は、アンインストール直前まで利用されていた契約の期間の月末となります。以下に例を示します。
 *
 * |アンインストール日|直前まで利用されていた契約の期間|closing_on の示す日時|
 * |---|---|---|
 * |2021/01/09|2021/12/10〜2021/01/09|2021/01/31|
 * |2021/01/10|2021/01/10〜2021/02/09|2021/02/28|
 *
 * 従量課金の場合のユーザーの契約期間については[こちら](https://shop-pro.jp/manual/appstore_fee)をご参照ください
 *
 * アンインストールフックの例を以下に示します。
 *
 * 例) 買い切りの場合
 * ```
 * {
 *   "account_id": "PA00000001",
 *   "application_charge_source_id": "Q21GPC",
 *   "uninstalled_at": 1552022739,
 *   "reason": "by_shop_owner"
 * }
 * ```
 *
 * 例) 月額課金の場合
 * ```
 * {
 *   "account_id": "PA00000001",
 *   "application_charge_source_id": "EW3V21",
 *   "recurring_application_charge_id": "F3RN9A",
 *   "uninstalled_at": 1552022740,
 *   "reason": "by_shop_owner"
 * }
 * ```
 *
 * 例) 従量課金を含む月額課金の場合
 * ```
 * {
 *   "account_id": "PA00000001",
 *   "application_charge_source_id": "WA37CA",
 *   "recurring_application_charge_id": "F3WQ1S",
 *   "uninstalled_at": 1552022740,
 *   "reason": "by_shop_owner",
 *   "usage_charge": {
 *     "api_token": "token",
 *     "closing_on": 1552533465
 *   }
 * }
 * ```
 *
 * ### アンインストールフックのリトライ
 * ステータスコード `200` のレスポンスをカラーミーショップが受け取れない場合は、ステータスコード `200` をカラーミーショップが受け取るまで、以下の条件で再度アンインストール情報を送信します。
 * なお、カラーミーショップによるアンインストール処理は、アンインストールフックの送信結果の成否によらず、アンインストールが実行されたときに完了します。
 *
 * - 2時間30分ごとにアンインストールフックの仕様に基づき再送します
 * - 最大で合計19回再送します
 * - すべての再送の試行でステータスコード `200` をカラーミーショップが受け取れない場合は、公認デベロッパー申請時に登録されたメールアドレス宛にメールを送信します
 *
 * ## インストール・アンインストールフックの署名検証
 * `X-Appstore-Signature` リクエストヘッダーに含まれる署名を検証して、リクエストがカラーミーショップから送信されたことを確認することを推奨します。
 *
 * 検証の手順は以下のとおりです。
 *
 * 1. カラーミーショップが発行した `webhook_secret` を秘密鍵として、HMAC-SHA256アルゴリズムを使用してリクエストボディのダイジェスト値を取得します。
 * 2. ダイジェスト値をBase64エンコードした値とリクエストヘッダーに付与された署名( `X-Appstore-Signature` の値）が一致することを確認します。
 *
 *
 * サンプルコード(ruby)
 * ```ruby
 * WEBHOOK_SECRET = 'my_webhook_secret'
 *
 * payload_body = request.body.read
 * signature = Base64.strict_encode64(OpenSSL::HMAC.digest('sha256', WEBHOOK_SECRET, payload_body))
 * ActiveSupport::SecurityUtils.secure_compare(signature, request.env['HTTP_X_APPSTORE_SIGNATURE'])
 * ```
 *
 * ### 発信元IPアドレスについて
 *
 * 発信元IPアドレスは固定ではありません。そのためIPアドレスが固定されていることを前提としてアプリケーションを開発しないでください。
 *
 * インストールフックおよびアンインストールフックのリクエストの発信元を検証する場合は上記の署名検証を行なってください。
 *
 */
export declare class SDK {
    applicationCharge: ApplicationCharge;
    /**
     * インラインスクリプトを挿入するAPIです。※新規デベロッパーはこのエンドポイントを利用できません
     */
    inlineScript: InlineScript;
    /**
     * ショップページにスクリプトタグを挿入するAPIです。
     *
     * @remarks
     *
     * スクリプトタグエンドポイントを利用する場合、以下の点にご注意ください。
     * - スクリプトを配信するサーバは、適切なCORSヘッダ(e.g. `Access-Control-Allow-Origin`) をレスポンスに付与する必要があります
     * - 登録済みスクリプトの内容を変更した場合は、都度更新リクエストにて適切な `integrity` パラメータを送信する必要があります
     * - 登録するスクリプトのURLスキームは `https` のみになります
     * - 登録・更新時にカラーミーAPIがスクリプトを取得します。スクリプトが取得できない場合は登録できません
     * - スクリプトタグAPIで挿入されたスクリプトタグは、アプリがアンインストールされると自動で削除されます
     *
     */
    script: Script;
    /**
     * スクリプトタグを挿入するAPIです。※新規デベロッパーはこのエンドポイントを利用できません。代わりに [スクリプトタグ](/open_api#tag/script) をご利用ください
     */
    scriptDeprecated: ScriptDeprecated;
    /**
     * アプリをアンインストールするAPIです。
     */
    uninstallation: Uninstallation;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
