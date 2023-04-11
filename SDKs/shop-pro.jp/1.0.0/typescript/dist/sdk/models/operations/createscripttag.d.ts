import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateScriptTagSecurity extends SpeakeasyBase {
    oAuth2: string;
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
export declare enum CreateScriptTagRequestBodyScriptTagDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare class CreateScriptTagRequestBodyScriptTag extends SpeakeasyBase {
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
    displayScope?: CreateScriptTagRequestBodyScriptTagDisplayScopeEnum;
    /**
     * スクリプトURL
     */
    src?: string;
}
/**
 * 作成するスクリプトタグの情報
 */
export declare class CreateScriptTagRequestBody extends SpeakeasyBase {
    scriptTag?: CreateScriptTagRequestBodyScriptTag;
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
export declare enum CreateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare class CreateScriptTag200ApplicationJSONScriptTag extends SpeakeasyBase {
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
    displayScope?: CreateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum;
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
export declare class CreateScriptTag200ApplicationJSON extends SpeakeasyBase {
    scriptTag?: CreateScriptTag200ApplicationJSONScriptTag;
}
export declare class CreateScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    createScriptTag200ApplicationJSONObject?: CreateScriptTag200ApplicationJSON;
}
