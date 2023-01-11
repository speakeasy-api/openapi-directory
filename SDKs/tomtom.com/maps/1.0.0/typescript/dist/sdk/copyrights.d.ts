import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Copyrights {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getMapVersionNumberCopyrightsFormat - Copyrights whole world
     *
     * The Copyrights API returns copyright information for
     * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
     * This call returns copyright information for the whole world.
    **/
    getMapVersionNumberCopyrightsFormat(req: operations.GetMapVersionNumberCopyrightsFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberCopyrightsFormatResponse>;
    /**
     * getMapVersionNumberCopyrightsCaptionFormat - Captions
     *
     * This API returns copyright captions for the map service.
    **/
    getMapVersionNumberCopyrightsCaptionFormat(req: operations.GetMapVersionNumberCopyrightsCaptionFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberCopyrightsCaptionFormatResponse>;
    /**
     * getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat - Copyrights bounding box
     *
     * The Copyrights API returns copyright information for
     * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
     * This call returns copyright information for a specific bounding box.
    **/
    getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat(req: operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse>;
    /**
     * getMapVersionNumberCopyrightsZoomXYFormat - Copyrights tile
     *
     * The Copyrights API returns copyright information for
     * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
     * This call returns copyright information for the a specific map tile.
    **/
    getMapVersionNumberCopyrightsZoomXYFormat(req: operations.GetMapVersionNumberCopyrightsZoomXyFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberCopyrightsZoomXyFormatResponse>;
}
