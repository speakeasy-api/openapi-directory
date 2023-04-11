import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetScriptTagSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetScriptTagRequest extends SpeakeasyBase {
    /**
     * スクリプトタグID
     */
    scriptTagId: number;
}
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
export declare enum GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare class GetScriptTag200ApplicationJSONScriptTag extends SpeakeasyBase {
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
    displayScope?: GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnum;
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
export declare class GetScriptTag200ApplicationJSON extends SpeakeasyBase {
    scriptTag?: GetScriptTag200ApplicationJSONScriptTag;
}
export declare class GetScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getScriptTag200ApplicationJSONObject?: GetScriptTag200ApplicationJSON;
}
