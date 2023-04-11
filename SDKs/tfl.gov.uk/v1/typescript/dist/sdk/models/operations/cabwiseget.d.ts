import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CabwiseGetRequest extends SpeakeasyBase {
    /**
     * Force Xml
     */
    forceXml?: boolean;
    /**
     * Latitude
     */
    lat: number;
    /**
     * Legacy Format
     */
    legacyFormat?: boolean;
    /**
     * Longitude
     */
    lon: number;
    /**
     * An optional parameter to limit the number of results return. Default and maximum is 20.
     */
    maxResults?: number;
    /**
     * Trading name of operating company
     */
    name?: string;
    /**
     * Operator Type e.g Minicab, Executive, Limousine
     */
    optype?: string;
    /**
     * The radius of the bounding circle in metres
     */
    radius?: number;
    /**
     * Twenty Four Seven Only
     */
    twentyFourSevenOnly?: boolean;
    /**
     * Wheelchair accessible
     */
    wc?: string;
}
export declare class CabwiseGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    systemObject?: Record<string, any>;
}
