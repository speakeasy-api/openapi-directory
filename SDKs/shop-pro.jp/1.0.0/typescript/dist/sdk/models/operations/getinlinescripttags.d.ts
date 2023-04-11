import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
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
export declare enum GetInlineScriptTags200ApplicationJSONInlineScriptTagsDisplayScopeEnum {
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
export declare enum GetInlineScriptTags200ApplicationJSONInlineScriptTagsTriggerEventEnum {
    ObjectBuilded = "object_builded"
}
export declare class GetInlineScriptTags200ApplicationJSONInlineScriptTags extends SpeakeasyBase {
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
    displayScope?: GetInlineScriptTags200ApplicationJSONInlineScriptTagsDisplayScopeEnum;
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
    triggerEvent?: GetInlineScriptTags200ApplicationJSONInlineScriptTagsTriggerEventEnum;
    /**
     * 更新日時
     */
    updateDate?: number;
}
export declare class GetInlineScriptTags200ApplicationJSON extends SpeakeasyBase {
    inlineScriptTags?: GetInlineScriptTags200ApplicationJSONInlineScriptTags[];
}
export declare class GetInlineScriptTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getInlineScriptTags200ApplicationJSONObject?: GetInlineScriptTags200ApplicationJSON;
}
