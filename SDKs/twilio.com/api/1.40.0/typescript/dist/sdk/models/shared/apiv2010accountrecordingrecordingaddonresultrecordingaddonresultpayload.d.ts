import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult Payload resource.
     */
    accountSid?: string;
    /**
     * The SID of the Add-on configuration.
     */
    addOnConfigurationSid?: string;
    /**
     * The SID of the AddOnResult to which the payload belongs.
     */
    addOnResultSid?: string;
    /**
     * The SID of the Add-on to which the result belongs.
     */
    addOnSid?: string;
    /**
     * The MIME type of the payload.
     */
    contentType?: string;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * The string provided by the vendor that describes the payload.
     */
    label?: string;
    /**
     * The SID of the recording to which the AddOnResult resource that contains the payload belongs.
     */
    referenceSid?: string;
    /**
     * The unique string that that we created to identify the Recording AddOnResult Payload resource.
     */
    sid?: string;
    /**
     * A list of related resources identified by their relative URIs.
     */
    subresourceUris?: Record<string, any>;
}
