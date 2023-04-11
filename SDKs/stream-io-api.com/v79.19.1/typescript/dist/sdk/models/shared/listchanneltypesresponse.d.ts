import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelTypeConfig } from "./channeltypeconfig";
/**
 * Successful response
 */
export declare class ListChannelTypesResponse extends SpeakeasyBase {
    /**
     * Object with all channel types
     */
    channelTypes: Record<string, ChannelTypeConfig>;
    duration: string;
}
