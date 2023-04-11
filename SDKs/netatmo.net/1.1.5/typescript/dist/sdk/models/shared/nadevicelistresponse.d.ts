import { SpeakeasyBase } from "../../../internal/utils";
import { NADeviceListBody } from "./nadevicelistbody";
/**
 * Successful response
 */
export declare class NADeviceListResponse extends SpeakeasyBase {
    body?: NADeviceListBody;
    status?: string;
    timeExec?: number;
    timeServer?: number;
}
