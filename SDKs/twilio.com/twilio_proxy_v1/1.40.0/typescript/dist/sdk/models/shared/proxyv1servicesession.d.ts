import { SpeakeasyBase } from "../../../internal/utils";
import { SessionEnumModeEnum } from "./sessionenummodeenum";
import { SessionEnumStatusEnum } from "./sessionenumstatusenum";
/**
 * Created
 */
export declare class ProxyV1ServiceSession extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Session resource.
     */
    accountSid?: string;
    /**
     * The reason the Session ended.
     */
    closedReason?: string;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created.
     */
    dateCreated?: Date;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session ended.
     */
    dateEnded?: Date;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session should expire. If this is value is present, it overrides the `ttl` value.
     */
    dateExpiry?: Date;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session last had an interaction.
     */
    dateLastInteraction?: Date;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session started.
     */
    dateStarted?: Date;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated.
     */
    dateUpdated?: Date;
    /**
     * The URLs of resources related to the Session.
     */
    links?: Record<string, any>;
    mode?: SessionEnumModeEnum;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/proxy/api/service) the session is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Session resource.
     */
    sid?: string;
    status?: SessionEnumStatusEnum;
    /**
     * The time, in seconds, when the session will expire. The time is measured from the last Session create or the Session's last Interaction.
     */
    ttl?: number;
    /**
     * An application-defined string that uniquely identifies the resource. This value must be 191 characters or fewer in length and be unique. Supports UTF-8 characters. **This value should not have PII.**
     */
    uniqueName?: string;
    /**
     * The absolute URL of the Session resource.
     */
    url?: string;
}
