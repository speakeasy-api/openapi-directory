import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateInlineScriptTagSecurity extends SpeakeasyBase {
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
export declare enum CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum {
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
export declare enum CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}
export declare class CreateInlineScriptTagRequestBodyInlineScriptTag extends SpeakeasyBase {
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
    displayScope?: CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum;
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
    triggerEvent?: CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum;
}
/**
 * 作成するインラインスクリプトタグの情報
 */
export declare class CreateInlineScriptTagRequestBody extends SpeakeasyBase {
    inlineScriptTag?: CreateInlineScriptTagRequestBodyInlineScriptTag;
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
export declare enum CreateInlineScriptTag201ApplicationJSONInlineScriptTagDisplayScopeEnum {
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
export declare enum CreateInlineScriptTag201ApplicationJSONInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}
export declare class CreateInlineScriptTag201ApplicationJSONInlineScriptTag extends SpeakeasyBase {
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
    displayScope?: CreateInlineScriptTag201ApplicationJSONInlineScriptTagDisplayScopeEnum;
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
    triggerEvent?: CreateInlineScriptTag201ApplicationJSONInlineScriptTagTriggerEventEnum;
    /**
     * 更新日時
     */
    updateDate?: number;
}
export declare class CreateInlineScriptTag201ApplicationJSON extends SpeakeasyBase {
    inlineScriptTag?: CreateInlineScriptTag201ApplicationJSONInlineScriptTag;
}
export declare class CreateInlineScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    createInlineScriptTag201ApplicationJSONObject?: CreateInlineScriptTag201ApplicationJSON;
}
