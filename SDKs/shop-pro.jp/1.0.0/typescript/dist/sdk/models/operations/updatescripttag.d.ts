import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateScriptTagSecurity extends SpeakeasyBase {
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
export declare enum UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare class UpdateScriptTagRequestBodyScriptTag extends SpeakeasyBase {
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
    displayScope?: UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum;
    /**
     * スクリプトURL
     */
    src?: string;
}
/**
 * 作成するスクリプトタグの情報
 */
export declare class UpdateScriptTagRequestBody extends SpeakeasyBase {
    scriptTag?: UpdateScriptTagRequestBodyScriptTag;
}
export declare class UpdateScriptTagRequest extends SpeakeasyBase {
    /**
     * 作成するスクリプトタグの情報
     */
    requestBody?: UpdateScriptTagRequestBody;
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
export declare enum UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum {
    All = "all",
    Shop = "shop",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
export declare class UpdateScriptTag200ApplicationJSONScriptTag extends SpeakeasyBase {
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
    displayScope?: UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum;
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
export declare class UpdateScriptTag200ApplicationJSON extends SpeakeasyBase {
    scriptTag?: UpdateScriptTag200ApplicationJSONScriptTag;
}
export declare class UpdateScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    updateScriptTag200ApplicationJSONObject?: UpdateScriptTag200ApplicationJSON;
}
