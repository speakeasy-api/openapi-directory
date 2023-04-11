import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A social media or web channel for a candidate.
 */
export declare class Channel extends SpeakeasyBase {
    /**
     * The unique public identifier for the candidate's channel.
     */
    id?: string;
    /**
     * The type of channel. The following is a list of types of channels, but is not exhaustive. More channel types may be added at a later time. One of: GooglePlus, YouTube, Facebook, Twitter
     */
    type?: string;
}
