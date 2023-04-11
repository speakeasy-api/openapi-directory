import { SpeakeasyBase } from "../../../internal/utils";
export declare class NetworkFollowEmbedded extends SpeakeasyBase {
    network?: Record<string, any>;
}
/**
 * The followed network
 */
export declare class NetworkFollow extends SpeakeasyBase {
    embedded?: NetworkFollowEmbedded;
    networkId?: number;
}
