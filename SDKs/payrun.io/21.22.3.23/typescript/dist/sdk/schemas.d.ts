import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Schemas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSchema - Get XSD schema
     *
     * Returns the XSD schema for the specified data type
    **/
    getSchema(req: operations.GetSchemaRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemaResponse>;
    /**
     * getSchemas - Get a list of all available schemas
     *
     * Returns a collection of links to all the available data object schemas
    **/
    getSchemas(req: operations.GetSchemasRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemasResponse>;
}
