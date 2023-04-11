import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Raster {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Static Image
     *
     * @remarks
     * The Static Image service renders a rectangular raster image
     * in the style, size, and zoom level specified. The image can be requested
     * using either a center point plus width and height or a bounding box.
     */
    getMapVersionNumberStaticimage(req: operations.GetMapVersionNumberStaticimageRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberStaticimageResponse>;
    /**
     * Tile
     *
     * @remarks
     * The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.
     */
    getMapVersionNumberTileLayerStyleZoomXYFormat(req: operations.GetMapVersionNumberTileLayerStyleZoomXYFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse>;
}
