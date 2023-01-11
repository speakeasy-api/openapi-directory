import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class WmsWmts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCapabilities - GetCapabilities
     *
     * The GetCapabilities call is part of TomTom's implementation of version 1.1.1
     * the Web Map Service (WMS). It provides descriptions of the other calls
     * that are available in the implementation.
    **/
    getCapabilities(req: operations.GetCapabilitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetCapabilitiesResponse>;
    /**
     * getMap - GetMap
     *
     * The GetMap call implements the Web Map Service 1.1.1 standard
     * to access TomTom raster map tiles. This service is described
     * in the response to the GetCapabilities API call.
    **/
    getMap(req: operations.GetMapRequest, config?: AxiosRequestConfig): Promise<operations.GetMapResponse>;
    /**
     * getMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXml - WMTS
     *
     * The WMTS GetCapabilities call implements version 1.0.0 of
     * the <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>
     * (WMTS) standard. It returns metadata that allows compatible calling systems to construct
     * calls to TomTom's raster map tile service. See the
     * <a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>
     * for more information on WMTS.
    **/
    getMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXml(req: operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest, config?: AxiosRequestConfig): Promise<operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse>;
}
