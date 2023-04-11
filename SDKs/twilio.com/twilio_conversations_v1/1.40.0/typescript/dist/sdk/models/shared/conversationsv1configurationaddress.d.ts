import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ConversationsV1ConfigurationAddress extends SpeakeasyBase {
    /**
     * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) the address belongs to
     */
    accountSid?: string;
    /**
     * The unique address to be configured. The address can be a whatsapp address or phone number
     */
    address?: string;
    /**
     * Auto Creation configuration for the address.
     */
    autoCreation?: any;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date;
    /**
     * The date that this resource was last updated.
     */
    dateUpdated?: Date;
    /**
     * The human-readable name of this configuration, limited to 256 characters. Optional.
     */
    friendlyName?: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    /**
     * Type of Address, value can be `whatsapp` or `sms`.
     */
    type?: string;
    /**
     * An absolute API resource URL for this address configuration.
     */
    url?: string;
}
