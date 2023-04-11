import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Everything about Otoroshi data exporters
 */
export declare class DataExporterConfigs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all data exporter configs
     *
     * @remarks
     * Get all data exporter configs
     */
    dataExporterTemplate(req: operations.DataExporterTemplateRequest, security: operations.DataExporterTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.DataExporterTemplateResponse>;
    /**
     * Create a new data exporter configs
     *
     * @remarks
     * Create a new data exporter configs
     */
    createBulkDataExporterConfigs(req: shared.DataExporterConfig, security: operations.CreateBulkDataExporterConfigsSecurity, config?: AxiosRequestConfig): Promise<operations.CreateBulkDataExporterConfigsResponse>;
    /**
     * Create a new data exporter config
     *
     * @remarks
     * Create a new data exporter config
     */
    createDataExporterConfig(req: shared.DataExporterConfig, security: operations.CreateDataExporterConfigSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDataExporterConfigResponse>;
    /**
     * Delete a data exporter config
     *
     * @remarks
     * Delete a data exporter config
     */
    deleteDataExporterConfig(req: operations.DeleteDataExporterConfigRequest, security: operations.DeleteDataExporterConfigSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteDataExporterConfigResponse>;
    /**
     * Delete a data exporter config
     *
     * @remarks
     * Delete a data exporter config
     */
    deletebulkDataExporterConfig(req: shared.Patch[], security: operations.DeletebulkDataExporterConfigSecurity, config?: AxiosRequestConfig): Promise<operations.DeletebulkDataExporterConfigResponse>;
    /**
     * Get all data exporter configs
     *
     * @remarks
     * Get all data exporter configs
     */
    findAllDataExporters(config?: AxiosRequestConfig): Promise<operations.FindAllDataExportersResponse>;
    /**
     * Get a data exporter config
     *
     * @remarks
     * Get a data exporter config
     */
    findDataExporterConfigById(req: operations.FindDataExporterConfigByIdRequest, security: operations.FindDataExporterConfigByIdSecurity, config?: AxiosRequestConfig): Promise<operations.FindDataExporterConfigByIdResponse>;
    /**
     * Update a data exporter configs with a diff
     *
     * @remarks
     * Update a data exporter configs with a diff
     */
    patchBulkDataExporterConfig(req: shared.Patch[], security: operations.PatchBulkDataExporterConfigSecurity, config?: AxiosRequestConfig): Promise<operations.PatchBulkDataExporterConfigResponse>;
    /**
     * Update a data exporter config with a diff
     *
     * @remarks
     * Update a data exporter config with a diff
     */
    patchDataExporterConfig(req: operations.PatchDataExporterConfigRequest, security: operations.PatchDataExporterConfigSecurity, config?: AxiosRequestConfig): Promise<operations.PatchDataExporterConfigResponse>;
    /**
     * Update a data exporter configs
     *
     * @remarks
     * Update a data exporter configs
     */
    updateBulkDataExporterConfig(req: shared.DataExporterConfig, security: operations.UpdateBulkDataExporterConfigSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateBulkDataExporterConfigResponse>;
    /**
     * Update a data exporter config
     *
     * @remarks
     * Update a data exporter config
     */
    updateDataExporterConfig(req: operations.UpdateDataExporterConfigRequest, security: operations.UpdateDataExporterConfigSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateDataExporterConfigResponse>;
}
