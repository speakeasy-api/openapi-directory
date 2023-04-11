import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Create {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a new geomark by copying the geometries from one or more existing geomarks from the current server.
     *
     * @remarks
     * The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks
     */
    postGeomarksCopy(req: operations.PostGeomarksCopyRequest, config?: AxiosRequestConfig): Promise<operations.PostGeomarksCopyResponse>;
    /**
     * Create a new geomark
     *
     * @remarks
     * Create a new geomark from the geometries read from the 'body' parameter or file.
     */
    postGeomarksNew(req: operations.PostGeomarksNewRequestBody, config?: AxiosRequestConfig): Promise<operations.PostGeomarksNewResponse>;
}
