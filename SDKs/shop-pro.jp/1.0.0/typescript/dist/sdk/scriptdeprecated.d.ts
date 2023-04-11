import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * スクリプトタグを挿入するAPIです。※新規デベロッパーはこのエンドポイントを利用できません。代わりに [スクリプトタグ](/open_api#tag/script) をご利用ください
 */
export declare class ScriptDeprecated {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * スクリプトタグの作成
     */
    createScriptTag(req: operations.CreateScriptTagRequestBody, security: operations.CreateScriptTagSecurity, config?: AxiosRequestConfig): Promise<operations.CreateScriptTagResponse>;
    /**
     * スクリプトタグの削除
     */
    deleteV1ScriptTagsScriptTagIdJson(req: operations.DeleteV1ScriptTagsScriptTagIdJsonRequest, security: operations.DeleteV1ScriptTagsScriptTagIdJsonSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteV1ScriptTagsScriptTagIdJsonResponse>;
    /**
     * スクリプトタグの取得
     */
    getScriptTag(req: operations.GetScriptTagRequest, security: operations.GetScriptTagSecurity, config?: AxiosRequestConfig): Promise<operations.GetScriptTagResponse>;
    /**
     * スクリプトタグの取得
     */
    getScriptTags(config?: AxiosRequestConfig): Promise<operations.GetScriptTagsResponse>;
    /**
     * スクリプトタグの更新
     */
    updateScriptTag(req: operations.UpdateScriptTagRequest, security: operations.UpdateScriptTagSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateScriptTagResponse>;
}
