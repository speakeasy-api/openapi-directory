import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceAppliancePrefixesDelegatedVlanAssignmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceAppliancePrefixesDelegatedVlanAssignments200ApplicationJSONObjects?: Record<string, any>[];
}
