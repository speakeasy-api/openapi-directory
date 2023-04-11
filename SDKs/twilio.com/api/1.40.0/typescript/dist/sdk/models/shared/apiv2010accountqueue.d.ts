import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ApiV2010AccountQueue extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Queue resource.
     */
    accountSid?: string;
    /**
     *  The average wait time in seconds of the members in this queue. This is calculated at the time of the request.
     */
    averageWaitTime?: number;
    /**
     * The number of calls currently in the queue.
     */
    currentSize?: number;
    /**
     * The date and time in GMT that this resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * A string that you assigned to describe this resource.
     */
    friendlyName?: string;
    /**
     *  The maximum number of calls that can be in the queue. The default is 1000 and the maximum is 5000.
     */
    maxSize?: number;
    /**
     * The unique string that that we created to identify this Queue resource.
     */
    sid?: string;
    /**
     * The URI of this resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
