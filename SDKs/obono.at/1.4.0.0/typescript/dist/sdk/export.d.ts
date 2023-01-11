import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Export {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    getExportCsvRegistrierkassenRegistrierkasseUuidBelege(req: operations.GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest, config?: AxiosRequestConfig): Promise<operations.GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse>;
    getExportDep131RegistrierkassenRegistrierkasseUuidBelege(req: operations.GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest, config?: AxiosRequestConfig): Promise<operations.GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse>;
    getExportDep7RegistrierkassenRegistrierkasseUuidBelege(req: operations.GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest, config?: AxiosRequestConfig): Promise<operations.GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse>;
    getExportGobdRegistrierkassenRegistrierkasseUuid(req: operations.GetExportGobdRegistrierkassenRegistrierkasseUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetExportGobdRegistrierkassenRegistrierkasseUuidResponse>;
    getExportHtmlBelegeBelegUuid(req: operations.GetExportHtmlBelegeBelegUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetExportHtmlBelegeBelegUuidResponse>;
    getExportPdfBelegeBelegUuid(req: operations.GetExportPdfBelegeBelegUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetExportPdfBelegeBelegUuidResponse>;
    getExportQrBelegeBelegUuid(req: operations.GetExportQrBelegeBelegUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetExportQrBelegeBelegUuidResponse>;
    getExportThermalPrintBelegeBelegUuid(req: operations.GetExportThermalPrintBelegeBelegUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetExportThermalPrintBelegeBelegUuidResponse>;
    getExportXlsRegistrierkassenRegistrierkasseUuidBelege(req: operations.GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeRequest, config?: AxiosRequestConfig): Promise<operations.GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeResponse>;
}
