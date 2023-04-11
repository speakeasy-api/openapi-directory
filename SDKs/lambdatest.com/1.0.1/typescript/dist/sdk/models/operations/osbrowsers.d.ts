import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OsBrowsersSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class OsBrowsersRequest extends SpeakeasyBase {
    /**
     * Fetch details for a particular OS
     */
    os?: string;
}
export declare class OsBrowsersResponse extends SpeakeasyBase {
    /**
     * Access denied. Auth error.
     */
    accessDenied?: shared.AccessDenied;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    osBrowsers?: shared.OsBrowsers;
}
