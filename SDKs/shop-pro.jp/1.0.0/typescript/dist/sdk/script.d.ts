import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * ショップページにスクリプトタグを挿入するAPIです。
 *
 * @remarks
 *
 * スクリプトタグエンドポイントを利用する場合、以下の点にご注意ください。
 * - スクリプトを配信するサーバは、適切なCORSヘッダ(e.g. `Access-Control-Allow-Origin`) をレスポンスに付与する必要があります
 * - 登録済みスクリプトの内容を変更した場合は、都度更新リクエストにて適切な `integrity` パラメータを送信する必要があります
 * - 登録するスクリプトのURLスキームは `https` のみになります
 * - 登録・更新時にカラーミーAPIがスクリプトを取得します。スクリプトが取得できない場合は登録できません
 * - スクリプトタグAPIで挿入されたスクリプトタグは、アプリがアンインストールされると自動で削除されます
 *
 */
export declare class Script {
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
    createShopScriptTag(req: operations.CreateShopScriptTagRequestBody, security: operations.CreateShopScriptTagSecurity, config?: AxiosRequestConfig): Promise<operations.CreateShopScriptTagResponse>;
    /**
     * スクリプトタグの削除
     */
    deleteScriptTag(req: operations.DeleteScriptTagRequest, security: operations.DeleteScriptTagSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteScriptTagResponse>;
    /**
     * スクリプトタグの取得
     */
    getShopScriptTag(req: operations.GetShopScriptTagRequest, security: operations.GetShopScriptTagSecurity, config?: AxiosRequestConfig): Promise<operations.GetShopScriptTagResponse>;
    /**
     * スクリプトタグの取得
     */
    getShopScriptTags(config?: AxiosRequestConfig): Promise<operations.GetShopScriptTagsResponse>;
    /**
     * スクリプトタグの更新
     */
    updateShopScriptTag(req: operations.UpdateShopScriptTagRequest, security: operations.UpdateShopScriptTagSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateShopScriptTagResponse>;
}
