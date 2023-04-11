import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ProxyV1ServiceSessionParticipant extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resource.
     */
    accountSid?: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created.
     */
    dateCreated?: Date;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Participant was removed from the session.
     */
    dateDeleted?: Date;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the participant. This value must be 255 characters or fewer. Supports UTF-8 characters. **This value should not have PII.**
     */
    friendlyName?: string;
    /**
     * The phone number or channel identifier of the Participant. This value must be 191 characters or fewer. Supports UTF-8 characters.
     */
    identifier?: string;
    /**
     * The URLs to resources related the participant.
     */
    links?: Record<string, any>;
    /**
     * The phone number or short code (masked number) of the participant's partner. The participant will call or message the partner participant at this number.
     */
    proxyIdentifier?: string;
    /**
     * The SID of the Proxy Identifier assigned to the Participant.
     */
    proxyIdentifierSid?: string;
    /**
     * The SID of the resource's parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
     */
    serviceSid?: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource.
     */
    sessionSid?: string;
    /**
     * The unique string that we created to identify the Participant resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Participant resource.
     */
    url?: string;
}
