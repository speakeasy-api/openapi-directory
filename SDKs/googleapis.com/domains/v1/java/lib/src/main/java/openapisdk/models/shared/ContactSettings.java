package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContactSettings
 * Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical.
**/
public class ContactSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminContact")
    public Contact adminContact;
    public ContactSettings withAdminContact(Contact adminContact) {
        this.adminContact = adminContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public ContactSettingsPrivacyEnum privacy;
    public ContactSettings withPrivacy(ContactSettingsPrivacyEnum privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrantContact")
    public Contact registrantContact;
    public ContactSettings withRegistrantContact(Contact registrantContact) {
        this.registrantContact = registrantContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("technicalContact")
    public Contact technicalContact;
    public ContactSettings withTechnicalContact(Contact technicalContact) {
        this.technicalContact = technicalContact;
        return this;
    }
}