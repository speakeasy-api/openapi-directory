import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DevicesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DevicesRequest extends SpeakeasyBase {
    /**
     * Fetch details for a particular OS
     */
    os?: string;
}
export declare class DevicesResponse extends SpeakeasyBase {
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
    osDevices?: shared.OsDevices;
}
