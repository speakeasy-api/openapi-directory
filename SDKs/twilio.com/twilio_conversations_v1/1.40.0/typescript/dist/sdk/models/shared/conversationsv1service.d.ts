import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ConversationsV1Service extends SpeakeasyBase {
    /**
     * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this service.
     */
    accountSid?: string;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date;
    /**
     * The date that this resource was last updated.
     */
    dateUpdated?: Date;
    /**
     * The human-readable name of this service, limited to 256 characters. Optional.
     */
    friendlyName?: string;
    /**
     * Contains absolute API resource URLs to access conversations, users, roles, bindings and configuration of this service.
     */
    links?: Record<string, any>;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    /**
     * An absolute API resource URL for this service.
     */
    url?: string;
}
