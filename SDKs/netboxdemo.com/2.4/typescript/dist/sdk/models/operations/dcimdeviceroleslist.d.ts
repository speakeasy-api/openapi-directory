import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDeviceRolesListRequest extends SpeakeasyBase {
    color?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    slug?: string;
    vmRole?: string;
}
export declare class DcimDeviceRolesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.DeviceRole[];
}
export declare class DcimDeviceRolesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimDeviceRolesList200ApplicationJSONObject?: DcimDeviceRolesList200ApplicationJSON;
}
