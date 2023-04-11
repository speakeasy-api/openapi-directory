import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSnmpRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationSnmpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSnmp200ApplicationJSONObject?: Record<string, any>;
}
