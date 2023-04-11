import { SpeakeasyBase } from "../../../internal/utils";
import { ConferenceEnumReasonConferenceEndedEnum } from "./conferenceenumreasonconferenceendedenum";
import { ConferenceEnumStatusEnum } from "./conferenceenumstatusenum";
/**
 * OK
 */
export declare class ApiV2010AccountConference extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Conference resource.
     */
    accountSid?: string;
    /**
     * The API version used to create this conference.
     */
    apiVersion?: string;
    /**
     * The call SID that caused the conference to end.
     */
    callSidEndingConference?: string;
    /**
     * The date and time in GMT that this resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * A string that you assigned to describe this conference room. Maxiumum length is 128 characters.
     */
    friendlyName?: string;
    reasonConferenceEnded?: ConferenceEnumReasonConferenceEndedEnum;
    /**
     * A string that represents the Twilio Region where the conference audio was mixed. May be `us1`, `ie1`,  `de1`, `sg1`, `br1`, `au1`, and `jp1`. Basic conference audio will always be mixed in `us1`. Global Conference audio will be mixed nearest to the majority of participants.
     */
    region?: string;
    /**
     * The unique string that that we created to identify this Conference resource.
     */
    sid?: string;
    status?: ConferenceEnumStatusEnum;
    /**
     * A list of related resources identified by their URIs relative to `https://api.twilio.com`.
     */
    subresourceUris?: Record<string, any>;
    /**
     * The URI of this resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
