import { SpeakeasyBase } from "../../../internal/utils";
import { InteractionEnumResourceStatusEnum } from "./interactionenumresourcestatusenum";
import { InteractionEnumTypeEnum } from "./interactionenumtypeenum";
/**
 * OK
 */
export declare class ProxyV1ServiceSessionInteraction extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Interaction resource.
     */
    accountSid?: string;
    /**
     * A JSON string that includes the message body of message interactions (e.g. `{"body": "hello"}`) or the call duration (when available) of a call (e.g. `{"duration": "5"}`).
     */
    data?: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the Interaction was created.
     */
    dateCreated?: Date;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated.
     */
    dateUpdated?: Date;
    /**
     * The SID of the inbound [Participant](https://www.twilio.com/docs/proxy/api/participant) resource.
     */
    inboundParticipantSid?: string;
    /**
     * The SID of the inbound resource; either the [Call](https://www.twilio.com/docs/voice/api/call-resource) or [Message](https://www.twilio.com/docs/sms/api/message.
     */
    inboundResourceSid?: string;
    inboundResourceStatus?: InteractionEnumResourceStatusEnum;
    /**
     * The inbound resource type. Can be [Call](https://www.twilio.com/docs/voice/api/call-resource) or [Message](https://www.twilio.com/docs/sms/api/message-resource).
     */
    inboundResourceType?: string;
    /**
     * The URL of the Twilio inbound resource
     */
    inboundResourceUrl?: string;
    /**
     * The SID of the outbound [Participant](https://www.twilio.com/docs/proxy/api/participant)).
     */
    outboundParticipantSid?: string;
    /**
     * The SID of the outbound resource; either the [Call](https://www.twilio.com/docs/voice/api/call-resource) or [Message](https://www.twilio.com/docs/sms/api/message-resource).
     */
    outboundResourceSid?: string;
    outboundResourceStatus?: InteractionEnumResourceStatusEnum;
    /**
     * The outbound resource type. Can be: [Call](https://www.twilio.com/docs/voice/api/call-resource) or [Message](https://www.twilio.com/docs/sms/api/message-resource).
     */
    outboundResourceType?: string;
    /**
     * The URL of the Twilio outbound resource.
     */
    outboundResourceUrl?: string;
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
     */
    serviceSid?: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource.
     */
    sessionSid?: string;
    /**
     * The unique string that we created to identify the Interaction resource.
     */
    sid?: string;
    type?: InteractionEnumTypeEnum;
    /**
     * The absolute URL of the Interaction resource.
     */
    url?: string;
}
