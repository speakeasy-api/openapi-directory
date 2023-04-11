import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * スクリプトを出力するページ
 *
 * @remarks
 * - `shop`: ショップページ
 * - `thanks_page`: 注文完了ページ
 *
 */
export declare enum GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum {
    Shop = "shop",
    ThanksPage = "thanks_page"
}
export declare class GetShopScriptTags200ApplicationJSONScriptTags extends SpeakeasyBase {
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
    displayScope?: GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum;
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
export declare class GetShopScriptTags200ApplicationJSON extends SpeakeasyBase {
    scriptTags?: GetShopScriptTags200ApplicationJSONScriptTags[];
}
export declare class GetShopScriptTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getShopScriptTags200ApplicationJSONObject?: GetShopScriptTags200ApplicationJSON;
}
