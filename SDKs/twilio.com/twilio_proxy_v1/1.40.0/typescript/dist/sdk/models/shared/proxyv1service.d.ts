import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceEnumGeoMatchLevelEnum } from "./serviceenumgeomatchlevelenum";
import { ServiceEnumNumberSelectionBehaviorEnum } from "./serviceenumnumberselectionbehaviorenum";
/**
 * Created
 */
export declare class ProxyV1Service extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
     */
    accountSid?: string;
    /**
     * The URL we call when the interaction status changes.
     */
    callbackUrl?: string;
    /**
     * The SID of the Chat Service Instance managed by Proxy Service. The Chat Service enables Proxy to forward SMS and channel messages to this chat instance. This is a one-to-one relationship.
     */
    chatInstanceSid?: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created.
     */
    dateCreated?: Date;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated.
     */
    dateUpdated?: Date;
    /**
     * The default `ttl` value for Sessions created in the Service. The TTL (time to live) is measured in seconds after the Session's last create or last Interaction. The default value of `0` indicates an unlimited Session length. You can override a Session's default TTL value by setting its `ttl` value.
     */
    defaultTtl?: number;
    geoMatchLevel?: ServiceEnumGeoMatchLevelEnum;
    /**
     * The URL we call on each interaction. If we receive a 403 status, we block the interaction; otherwise the interaction continues.
     */
    interceptCallbackUrl?: string;
    /**
     * The URLs of resources related to the Service.
     */
    links?: Record<string, any>;
    numberSelectionBehavior?: ServiceEnumNumberSelectionBehaviorEnum;
    /**
     * The URL we call when an inbound call or SMS action occurs on a closed or non-existent Session. If your server (or a Twilio [function](https://www.twilio.com/functions)) responds with valid [TwiML](https://www.twilio.com/docs/voice/twiml), we will process it. This means it is possible, for example, to play a message for a call, send an automated text message response, or redirect a call to another Phone Number. See [Out-of-Session Callback Response Guide](https://www.twilio.com/docs/proxy/out-session-callback-response-guide) for more information.
     */
    outOfSessionCallbackUrl?: string;
    /**
     * The unique string that we created to identify the Service resource.
     */
    sid?: string;
    /**
     * An application-defined string that uniquely identifies the resource. This value must be 191 characters or fewer in length and be unique. Supports UTF-8 characters. **This value should not have PII.**
     */
    uniqueName?: string;
    /**
     * The absolute URL of the Service resource.
     */
    url?: string;
}
