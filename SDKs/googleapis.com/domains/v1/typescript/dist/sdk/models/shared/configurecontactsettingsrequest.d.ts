import { SpeakeasyBase } from "../../../internal/utils";
import { ContactSettings } from "./contactsettings";
export declare enum ConfigureContactSettingsRequestContactNoticesEnum {
    ContactNoticeUnspecified = "CONTACT_NOTICE_UNSPECIFIED",
    PublicContactDataAcknowledgement = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
}
/**
 * Request for the `ConfigureContactSettings` method.
 */
export declare class ConfigureContactSettingsRequest extends SpeakeasyBase {
    /**
     * The list of contact notices that the caller acknowledges. The notices needed here depend on the values specified in `contact_settings`.
     */
    contactNotices?: ConfigureContactSettingsRequestContactNoticesEnum[];
    /**
     * Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical.
     */
    contactSettings?: ContactSettings;
    /**
     * Required. The field mask describing which fields to update as a comma-separated list. For example, if only the registrant contact is being updated, the `update_mask` is `"registrant_contact"`.
     */
    updateMask?: string;
    /**
     * Validate the request without actually updating the contact settings.
     */
    validateOnly?: boolean;
}
