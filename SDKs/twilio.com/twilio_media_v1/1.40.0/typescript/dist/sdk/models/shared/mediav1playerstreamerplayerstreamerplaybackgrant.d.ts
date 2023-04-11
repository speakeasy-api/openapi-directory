import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class MediaV1PlayerStreamerPlayerStreamerPlaybackGrant extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The grant that authorizes the player sdk to connect to the livestream
     */
    grant?: any;
    /**
     * The unique string generated to identify the PlayerStreamer resource that this PlaybackGrant authorizes views for.
     */
    sid?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
