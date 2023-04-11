import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetemailinfoRequest extends SpeakeasyBase {
    /**
     * Email address to retrieve validation information
     */
    email: string;
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
}
/**
 * Email validation and demographic information
 */
export declare class Getemailinfo200ApplicationJSON extends SpeakeasyBase {
    code?: string;
    credits?: string;
    email?: string;
    geolocation?: string;
    info?: string;
    isDisposable?: string;
    isEducational?: string;
    isGeneric?: string;
    isGovernment?: string;
    isOrganizational?: string;
    isVulgar?: string;
    response?: string;
}
export declare class GetemailinfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Email validation and demographic information
     */
    getemailinfo200ApplicationJSONObject?: Getemailinfo200ApplicationJSON;
}
