import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetShopScriptTagSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetShopScriptTagRequest extends SpeakeasyBase {
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
export declare enum GetShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}
export declare class GetShopScriptTag200ApplicationJSONScriptTag extends SpeakeasyBase {
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
    displayScope?: GetShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum;
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
export declare class GetShopScriptTag200ApplicationJSON extends SpeakeasyBase {
    scriptTag?: GetShopScriptTag200ApplicationJSONScriptTag;
}
export declare class GetShopScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getShopScriptTag200ApplicationJSONObject?: GetShopScriptTag200ApplicationJSON;
}
