import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetCapabilitiesRequestEnum {
    GetCapabilities = "GetCapabilities"
}
export declare enum GetCapabilitiesServiceEnum {
    Wms = "WMS"
}
/**
 * WMS service version
 */
export declare enum GetCapabilitiesVersionEnum {
    One11 = "1.1.1"
}
export declare enum GetCapabilitiesVersionNumberEnum {
    One = "1"
}
export declare class GetCapabilitiesRequest extends SpeakeasyBase {
    request: GetCapabilitiesRequestEnum;
    service: GetCapabilitiesServiceEnum;
    /**
     * WMS service version
     */
    version?: GetCapabilitiesVersionEnum;
    versionNumber: GetCapabilitiesVersionNumberEnum;
}
export declare class GetCapabilitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
