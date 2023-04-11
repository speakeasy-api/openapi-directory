import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSmVppAccountsRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationSmVppAccounts200ApplicationJSON extends SpeakeasyBase {
    /**
     * The id of the VPP Account
     */
    id?: string;
    /**
     * The VPP Account's Service Token
     */
    vppServiceToken?: string;
}
export declare class GetOrganizationSmVppAccountsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSmVppAccounts200ApplicationJSONObjects?: GetOrganizationSmVppAccounts200ApplicationJSON[];
}
