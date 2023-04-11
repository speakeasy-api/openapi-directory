import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * スクリプトを出力するページ。
 *
 * @remarks
 *
 * - `all`: ショップページと注文完了ページの両方
 * - `shop`: ショップページ
 * - `thanks_page`: 注文完了ページ
 * - `cart`: カートの途中のページ
 *
 */
export declare enum GetScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare class GetScriptTags200ApplicationJSONScriptTags extends SpeakeasyBase {
    /**
     * スクリプトを出力するページ。
     *
     * @remarks
     *
     * - `all`: ショップページと注文完了ページの両方
     * - `shop`: ショップページ
     * - `thanks_page`: 注文完了ページ
     * - `cart`: カートの途中のページ
     *
     */
    displayScope?: GetScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum;
    /**
     * スクリプトタグID
     */
    id?: number;
    /**
     * 作成日時
     */
    makeDate?: number;
    /**
     * スクリプトURL
     */
    src?: string;
    /**
     * 更新日時
     */
    updateDate?: number;
}
export declare class GetScriptTags200ApplicationJSON extends SpeakeasyBase {
    scriptTags?: GetScriptTags200ApplicationJSONScriptTags[];
}
export declare class GetScriptTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getScriptTags200ApplicationJSONObject?: GetScriptTags200ApplicationJSON;
}
