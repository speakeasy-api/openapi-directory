import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Version of the service to call. The current version is 1
 */
export declare enum GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlVersionNumberEnum {
    One = "1"
}
export declare enum GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlWMTSVersionEnum {
    One00 = "1.0.0"
}
export declare class GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlRequest extends SpeakeasyBase {
    /**
     * Your API key for calling this service.
     */
    key: string;
    /**
     * Version of the service to call. The current version is 1
     */
    versionNumber: GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlVersionNumberEnum;
    wmtsVersion: GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlWMTSVersionEnum;
}
export declare class GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
