import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateInlineScriptTagSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * インラインスクリプトを出力するページ。
 *
 * @remarks
 *
 * - `all`: カートの途中のページと注文完了ページの両方
 * - `thanks_page`: 注文完了ページ
 * - `cart`: カートの途中のページ
 *
 */
export declare enum UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum {
    All = "all",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
/**
 * インラインスクリプトを実行するタイミング。
 *
 * @remarks
 *
 * - `object_builded`: JSオブジェクトの作成が完了した時
 *
 */
export declare enum UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}
export declare class UpdateInlineScriptTagRequestBodyInlineScriptTag extends SpeakeasyBase {
    /**
     * インラインスクリプトを出力するページ。
     *
     * @remarks
     *
     * - `all`: カートの途中のページと注文完了ページの両方
     * - `thanks_page`: 注文完了ページ
     * - `cart`: カートの途中のページ
     *
     */
    displayScope?: UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum;
    /**
     * インラインスクリプト
     */
    script?: string;
    /**
     * インラインスクリプトを実行するタイミング。
     *
     * @remarks
     *
     * - `object_builded`: JSオブジェクトの作成が完了した時
     *
     */
    triggerEvent?: UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum;
}
/**
 * 更新するスクリプトタグの情報
 */
export declare class UpdateInlineScriptTagRequestBody extends SpeakeasyBase {
    inlineScriptTag?: UpdateInlineScriptTagRequestBodyInlineScriptTag;
}
export declare class UpdateInlineScriptTagRequest extends SpeakeasyBase {
    /**
     * 更新するスクリプトタグの情報
     */
    requestBody?: UpdateInlineScriptTagRequestBody;
    /**
     * インラインスクリプトタグID
     */
    inlineScriptTagId: number;
}
/**
 * インラインスクリプトを出力するページ。
 *
 * @remarks
 *
 * - `all`: カートの途中のページと注文完了ページの両方
 * - `thanks_page`: 注文完了ページ
 * - `cart`: カートの途中のページ
 *
 */
export declare enum UpdateInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum {
    All = "all",
    ThanksPage = "thanks_page",
    Cart = "cart"
}
/**
 * インラインスクリプトを実行するタイミング。
 *
 * @remarks
 *
 * - `object_builded`: JSオブジェクトの作成が完了した時
 *
 */
export declare enum UpdateInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}
export declare class UpdateInlineScriptTag200ApplicationJSONInlineScriptTag extends SpeakeasyBase {
    /**
     * アカウントID
     */
    accountId?: string;
    /**
     * インラインスクリプトを出力するページ。
     *
     * @remarks
     *
     * - `all`: カートの途中のページと注文完了ページの両方
     * - `thanks_page`: 注文完了ページ
     * - `cart`: カートの途中のページ
     *
     */
    displayScope?: UpdateInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum;
    /**
     * インラインスクリプトタグID
     */
    id?: number;
    /**
     * 作成日時
     */
    makeDate?: number;
    /**
     * アプリID
     */
    oauthApplicationId?: number;
    /**
     * インラインスクリプト
     */
    script?: string;
    /**
     * インラインスクリプトを実行するタイミング。
     *
     * @remarks
     *
     * - `object_builded`: JSオブジェクトの作成が完了した時
     *
     */
    triggerEvent?: UpdateInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnum;
    /**
     * 更新日時
     */
    updateDate?: number;
}
export declare class UpdateInlineScriptTag200ApplicationJSON extends SpeakeasyBase {
    inlineScriptTag?: UpdateInlineScriptTag200ApplicationJSONInlineScriptTag;
}
export declare class UpdateInlineScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    updateInlineScriptTag200ApplicationJSONObject?: UpdateInlineScriptTag200ApplicationJSON;
}
