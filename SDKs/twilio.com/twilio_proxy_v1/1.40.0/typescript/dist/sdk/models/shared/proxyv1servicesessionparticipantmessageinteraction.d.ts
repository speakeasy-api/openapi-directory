import { SpeakeasyBase } from "../../../internal/utils";
import { MessageInteractionEnumResourceStatusEnum } from "./messageinteractionenumresourcestatusenum";
import { MessageInteractionEnumTypeEnum } from "./messageinteractionenumtypeenum";
/**
 * Created
 */
export declare class ProxyV1ServiceSessionParticipantMessageInteraction extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the MessageInteraction resource.
     */
    accountSid?: string;
    /**
     * A JSON string that includes the message body sent to the participant. (e.g. `{"body": "hello"}`)
     */
    data?: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created.
     */
    dateCreated?: Date;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated.
     */
    dateUpdated?: Date;
    /**
     * Always empty for created Message Interactions.
     */
    inboundParticipantSid?: string;
    /**
     * Always empty for created Message Interactions.
     */
    inboundResourceSid?: string;
    inboundResourceStatus?: MessageInteractionEnumResourceStatusEnum;
    /**
     * Always empty for created Message Interactions.
     */
    inboundResourceType?: string;
    /**
     * Always empty for created Message Interactions.
     */
    inboundResourceUrl?: string;
    /**
     * The SID of the outbound [Participant](https://www.twilio.com/docs/proxy/api/participant) resource.
     */
    outboundParticipantSid?: string;
    /**
     * The SID of the outbound [Message](https://www.twilio.com/docs/sms/api/message-resource) resource.
     */
    outboundResourceSid?: string;
    outboundResourceStatus?: MessageInteractionEnumResourceStatusEnum;
    /**
     * The outbound resource type. This value is always `Message`.
     */
    outboundResourceType?: string;
    /**
     * The URL of the Twilio message resource.
     */
    outboundResourceUrl?: string;
    /**
     * The SID of the [Participant](https://www.twilio.com/docs/proxy/api/participant) resource.
     */
    participantSid?: string;
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
     */
    serviceSid?: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource.
     */
    sessionSid?: string;
    /**
     * The unique string that we created to identify the MessageInteraction resource.
     */
    sid?: string;
    type?: MessageInteractionEnumTypeEnum;
    /**
     * The absolute URL of the MessageInteraction resource.
     */
    url?: string;
}
