import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateShopScriptTagSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * スクリプトを出力するページ
 *
 * @remarks
 * - `shop`: ショップページ
 * - `thanks_page`: 注文完了ページ
 *
 */
export declare enum CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}
export declare class CreateShopScriptTagRequestBodyScriptTag extends SpeakeasyBase {
    /**
     * スクリプトを出力するページ
     *
     * @remarks
     * - `shop`: ショップページ
     * - `thanks_page`: 注文完了ページ
     *
     */
    displayScope?: CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum;
    /**
     * スクリプトのハッシュ値をBase64エンコードした値を設定します。この値はスクリプトタグのIntegrity属性値として利用されます。
     *
     * @remarks
     * 詳しくは [サブリソース完全性 - Web セキュリティ | MDN](https://developer.mozilla.org/ja/docs/Web/Security/Subresource_Integrity) (外部サイト) をご覧ください。
     * ※この値が正しく設定されない場合はブラウザがスクリプトの読み込みをブロックします。この場合、一般的なWebブラウザ(e.g. Google Chrome, Firefox)の開発者ツールのコンソールでエラーを確認できます。
     *
     */
    integrity?: string;
    /**
     * スクリプトURL
     */
    src?: string;
}
/**
 * 作成するスクリプトタグの情報
 */
export declare class CreateShopScriptTagRequestBody extends SpeakeasyBase {
    scriptTag?: CreateShopScriptTagRequestBodyScriptTag;
}
/**
 * スクリプトを出力するページ
 *
 * @remarks
 * - `shop`: ショップページ
 * - `thanks_page`: 注文完了ページ
 *
 */
export declare enum CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}
export declare class CreateShopScriptTag200ApplicationJSONScriptTag extends SpeakeasyBase {
    /**
     * アカウントID
     */
    accountId?: string;
    /**
     * スクリプトを出力するページ
     *
     * @remarks
     * - `shop`: ショップページ
     * - `thanks_page`: 注文完了ページ
     *
     */
    displayScope?: CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum;
    /**
     * スクリプトタグID
     */
    id?: number;
    /**
     * スクリプトファイルのハッシュ値（script tagのintegrity属性）
     */
    integrity?: string;
    /**
     * 作成日時
     */
    makeDate?: number;
    /**
     * OAuthアプリケーションID
     */
    oauthApplicationId?: number;
    /**
     * スクリプトURL
     */
    src?: string;
    /**
     * 更新日時
     */
    updateDate?: number;
}
export declare class CreateShopScriptTag200ApplicationJSON extends SpeakeasyBase {
    scriptTag?: CreateShopScriptTag200ApplicationJSONScriptTag;
}
export declare class CreateShopScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    createShopScriptTag200ApplicationJSONObject?: CreateShopScriptTag200ApplicationJSON;
}
