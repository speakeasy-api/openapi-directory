import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationDeviceStatusesRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationDeviceStatusesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationDeviceStatuses200ApplicationJSONObjects?: Record<string, any>[];
}
