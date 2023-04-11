import { SpeakeasyBase } from "../../../internal/utils";
import { RecordingAddOnResultEnumStatusEnum } from "./recordingaddonresultenumstatusenum";
/**
 * OK
 */
export declare class ApiV2010AccountRecordingRecordingAddOnResult extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult resource.
     */
    accountSid?: string;
    /**
     * The SID of the Add-on configuration.
     */
    addOnConfigurationSid?: string;
    /**
     * The SID of the Add-on to which the result belongs.
     */
    addOnSid?: string;
    /**
     * The date and time in GMT that the result was completed specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCompleted?: string;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * The SID of the recording to which the AddOnResult resource belongs.
     */
    referenceSid?: string;
    /**
     * The unique string that that we created to identify the Recording AddOnResult resource.
     */
    sid?: string;
    status?: RecordingAddOnResultEnumStatusEnum;
    /**
     * A list of related resources identified by their relative URIs.
     */
    subresourceUris?: Record<string, any>;
}
