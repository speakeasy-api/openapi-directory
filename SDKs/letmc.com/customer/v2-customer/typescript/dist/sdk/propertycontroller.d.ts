import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PropertyController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * propertyControllerGetPropertiesPhotos - A collection showing all the photos linked to a specific block, property or room
    **/
    propertyControllerGetPropertiesPhotos(req: operations.PropertyControllerGetPropertiesPhotosRequest, config?: AxiosRequestConfig): Promise<operations.PropertyControllerGetPropertiesPhotosResponse>;
}
