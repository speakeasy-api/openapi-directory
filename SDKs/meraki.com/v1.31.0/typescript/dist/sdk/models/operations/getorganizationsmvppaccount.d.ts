import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSmVppAccountRequest extends SpeakeasyBase {
    organizationId: string;
    vppAccountId: string;
}
/**
 * Successful operation
 */
export declare class GetOrganizationSmVppAccount200ApplicationJSON extends SpeakeasyBase {
    /**
     * The id of the VPP Account
     */
    id?: string;
    /**
     * The VPP Account's Service Token
     */
    vppServiceToken?: string;
}
export declare class GetOrganizationSmVppAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSmVppAccount200ApplicationJSONObject?: GetOrganizationSmVppAccount200ApplicationJSON;
}
