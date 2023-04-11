import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Embed full network info
 */
export declare enum GetUserFollowsNetworksEmbedEnum {
    Network = "network"
}
export declare class GetUserFollowsNetworksRequest extends SpeakeasyBase {
    /**
     * Embed full network info
     */
    embed?: GetUserFollowsNetworksEmbedEnum;
}
export declare class GetUserFollowsNetworksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of followed networks
     */
    networkFollows?: shared.NetworkFollow[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
