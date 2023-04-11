import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUserFollowsNetworksNetworkIdRequest extends SpeakeasyBase {
    networkId: number;
}
export declare class PutUserFollowsNetworksNetworkIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * this network is now followed
     */
    networkFollow?: shared.NetworkFollow;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
