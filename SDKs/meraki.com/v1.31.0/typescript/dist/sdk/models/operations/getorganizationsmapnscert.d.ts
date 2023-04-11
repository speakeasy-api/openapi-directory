import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSmApnsCertRequest extends SpeakeasyBase {
    organizationId: string;
}
/**
 * Successful operation
 */
export declare class GetOrganizationSmApnsCert200ApplicationJSON extends SpeakeasyBase {
    /**
     * Organization APNS Certificate used by devices to communication with Apple
     */
    certificate?: string;
}
export declare class GetOrganizationSmApnsCertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSmApnsCert200ApplicationJSONObject?: GetOrganizationSmApnsCert200ApplicationJSON;
}
