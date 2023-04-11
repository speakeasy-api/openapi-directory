import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Vector {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Tile
     *
     * @remarks
     * The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.
     */
    getMapVersionNumberTileLayerStyleZoomXYPbf(req: operations.GetMapVersionNumberTileLayerStyleZoomXYPbfRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberTileLayerStyleZoomXYPbfResponse>;
}
