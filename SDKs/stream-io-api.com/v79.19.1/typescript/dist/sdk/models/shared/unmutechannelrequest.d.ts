import { SpeakeasyBase } from "../../../internal/utils";
export declare class UnmuteChannelRequest extends SpeakeasyBase {
    channelCid: string;
    channelCids: string[];
    expiration?: number;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    userId?: string;
}
