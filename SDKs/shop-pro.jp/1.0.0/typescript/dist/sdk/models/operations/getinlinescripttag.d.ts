import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetInlineScriptTagSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetInlineScriptTagRequest extends SpeakeasyBase {
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
export declare enum GetInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum {
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
export declare enum GetInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnum {
    ObjectBuilded = "object_builded"
}
export declare class GetInlineScriptTag200ApplicationJSONInlineScriptTag extends SpeakeasyBase {
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
    displayScope?: GetInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum;
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
    triggerEvent?: GetInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnum;
    /**
     * 更新日時
     */
    updateDate?: number;
}
export declare class GetInlineScriptTag200ApplicationJSON extends SpeakeasyBase {
    inlineScriptTag?: GetInlineScriptTag200ApplicationJSONInlineScriptTag;
}
export declare class GetInlineScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getInlineScriptTag200ApplicationJSONObject?: GetInlineScriptTag200ApplicationJSON;
}
