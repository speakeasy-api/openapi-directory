import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Vector {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getMapVersionNumberTileLayerStyleZoomXYPbf - Tile
     *
     * The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.
    **/
    getMapVersionNumberTileLayerStyleZoomXYPbf(req: operations.GetMapVersionNumberTileLayerStyleZoomXyPbfRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberTileLayerStyleZoomXyPbfResponse>;
}
