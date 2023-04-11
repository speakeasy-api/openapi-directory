import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateShopScriptTagSecurity extends SpeakeasyBase {
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
export declare enum UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}
export declare class UpdateShopScriptTagRequestBodyScriptTag extends SpeakeasyBase {
    /**
     * スクリプトを出力するページ
     *
     * @remarks
     * - `shop`: ショップページ
     * - `thanks_page`: 注文完了ページ
     *
     */
    displayScope?: UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum;
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
export declare class UpdateShopScriptTagRequestBody extends SpeakeasyBase {
    scriptTag?: UpdateShopScriptTagRequestBodyScriptTag;
}
export declare class UpdateShopScriptTagRequest extends SpeakeasyBase {
    /**
     * 作成するスクリプトタグの情報
     */
    requestBody?: UpdateShopScriptTagRequestBody;
    /**
     * スクリプトタグID
     */
    scriptTagId: number;
}
/**
 * スクリプトを出力するページ
 *
 * @remarks
 * - `shop`: ショップページ
 * - `thanks_page`: 注文完了ページ
 *
 */
export declare enum UpdateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}
export declare class UpdateShopScriptTag200ApplicationJSONScriptTag extends SpeakeasyBase {
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
    displayScope?: UpdateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum;
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
export declare class UpdateShopScriptTag200ApplicationJSON extends SpeakeasyBase {
    scriptTag?: UpdateShopScriptTag200ApplicationJSONScriptTag;
}
export declare class UpdateShopScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    updateShopScriptTag200ApplicationJSONObject?: UpdateShopScriptTag200ApplicationJSON;
}
