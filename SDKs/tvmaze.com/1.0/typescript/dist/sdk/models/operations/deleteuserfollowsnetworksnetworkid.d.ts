import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUserFollowsNetworksNetworkIdRequest extends SpeakeasyBase {
    networkId: number;
}
export declare class DeleteUserFollowsNetworksNetworkIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
