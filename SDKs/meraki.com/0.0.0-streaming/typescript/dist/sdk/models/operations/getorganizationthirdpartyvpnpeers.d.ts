import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationThirdPartyVPNPeersRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationThirdPartyVPNPeersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationThirdPartyVPNPeers200ApplicationJSONObjects?: Record<string, any>[];
}
