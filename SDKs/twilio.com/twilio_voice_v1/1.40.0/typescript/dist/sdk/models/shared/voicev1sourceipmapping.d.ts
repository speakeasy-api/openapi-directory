import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class VoiceV1SourceIpMapping extends SpeakeasyBase {
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to map from.
     */
    ipRecordSid?: string;
    /**
     * The unique string that we created to identify the IP Record resource.
     */
    sid?: string;
    /**
     * The SID of the SIP Domain that the IP Record is mapped to.
     */
    sipDomainSid?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
