import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateUsageChargeSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateUsageChargeRequestBodyUsageCharge extends SpeakeasyBase {
    /**
     * 従量課金の発生理由。使用可能文字は ASCII, JIS X 0208, JIS X 0201, JIS X 0212に限ります。（[デベロッパー](https://developer.shop-pro.jp) ページに掲載される各アプリの「従量課金」一覧で登録内容を確認できます。カラーミーショップ側がこのパラメータを参照して課金の内容を確認することがあります。）
     */
    description: string;
    /**
     * ポイント数（税抜）。100 円以上 100 万円以下が指定可能。このポイントに消費税を加算してショップオーナーに請求します。
     */
    point: number;
}
/**
 * 従量課金データ
 */
export declare class CreateUsageChargeRequestBody extends SpeakeasyBase {
    usageCharge?: CreateUsageChargeRequestBodyUsageCharge;
}
export declare class CreateUsageChargeRequest extends SpeakeasyBase {
    /**
     * 従量課金データ
     */
    requestBody: CreateUsageChargeRequestBody;
    /**
     * アンインストール後の従量課金の精算をする際に、 `Authorization` ヘッダへアクセストークンを指定する代わりにこのヘッダを指定することで、このAPIを実行することができます。
     *
     * @remarks
     * インストール中は指定不要で、アンインストール後のみ必須となります。
     * アンインストールフックで通知される `usage_charge.api_token` の値を指定してください。
     * このヘッダは、アンインストールフックで通知される `usage_charge.closing_on` まで有効です。この期間を過ぎると従量課金を精算できなくなりますのでご注意ください。詳しくは [アプリのアンインストール](#section/API/アプリのアンインストール) をご確認ください。
     */
    xAppstoreUsageChargeToken?: string;
    /**
     * 課金契約ID
     */
    recurringApplicationChargeId: string;
}
export declare class CreateUsageCharge201ApplicationJSONUsageCharge extends SpeakeasyBase {
    /**
     * 従量課金発生理由
     */
    description?: string;
    /**
     * 従量課金ID
     */
    id?: string;
    /**
     * 作成日時
     */
    makeDate?: number;
    /**
     * ポイント請求額(税抜)
     */
    point?: number;
    /**
     * 更新日時
     */
    updateDate?: number;
}
export declare class CreateUsageCharge201ApplicationJSON extends SpeakeasyBase {
    usageCharge?: CreateUsageCharge201ApplicationJSONUsageCharge;
}
export declare class CreateUsageChargeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    createUsageCharge201ApplicationJSONObject?: CreateUsageCharge201ApplicationJSON;
}
