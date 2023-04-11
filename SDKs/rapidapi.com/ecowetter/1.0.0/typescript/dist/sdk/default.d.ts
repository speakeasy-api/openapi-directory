import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Default {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Wetter 2021 für Berlin, Reichstag
     *
     * @remarks
     * Abfrage der Wettervorhersage für einen Ort, der entweder durch Angabe eines Suchbegriffs mit dem Parameter `q` oder durch Geo-Koordinaten in den Parametern `lat` und `lon` spezifiziert wird.
     */
    getPublicHistory(req: operations.GetPublicHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicHistoryResponse>;
}
