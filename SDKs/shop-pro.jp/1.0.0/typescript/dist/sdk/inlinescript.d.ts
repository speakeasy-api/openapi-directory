import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * インラインスクリプトを挿入するAPIです。※新規デベロッパーはこのエンドポイントを利用できません
 */
export declare class InlineScript {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * インラインスクリプトタグの登録
     */
    createInlineScriptTag(req: operations.CreateInlineScriptTagRequestBody, security: operations.CreateInlineScriptTagSecurity, config?: AxiosRequestConfig): Promise<operations.CreateInlineScriptTagResponse>;
    /**
     * インラインスクリプトタグの削除
     */
    deleteInlineScriptTag(req: operations.DeleteInlineScriptTagRequest, security: operations.DeleteInlineScriptTagSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteInlineScriptTagResponse>;
    /**
     * インラインスクリプトタグの取得
     */
    getInlineScriptTag(req: operations.GetInlineScriptTagRequest, security: operations.GetInlineScriptTagSecurity, config?: AxiosRequestConfig): Promise<operations.GetInlineScriptTagResponse>;
    /**
     * インラインスクリプトタグの取得
     */
    getInlineScriptTags(config?: AxiosRequestConfig): Promise<operations.GetInlineScriptTagsResponse>;
    /**
     * インラインスクリプトタグの更新
     */
    updateInlineScriptTag(req: operations.UpdateInlineScriptTagRequest, security: operations.UpdateInlineScriptTagSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateInlineScriptTagResponse>;
}
