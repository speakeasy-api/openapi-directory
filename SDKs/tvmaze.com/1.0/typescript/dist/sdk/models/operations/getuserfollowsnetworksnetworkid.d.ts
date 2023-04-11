import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserFollowsNetworksNetworkIdRequest extends SpeakeasyBase {
    networkId: number;
}
export declare class GetUserFollowsNetworksNetworkIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The followed network
     */
    networkFollow?: shared.NetworkFollow;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
