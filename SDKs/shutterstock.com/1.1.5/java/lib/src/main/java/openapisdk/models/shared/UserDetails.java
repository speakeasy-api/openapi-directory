package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserDetails
 * User details
**/
public class UserDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_id")
    public String contributorId;
    public UserDetails withContributorId(String contributorId) {
        this.contributorId = contributorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_id")
    public String customerId;
    public UserDetails withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserDetails withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public UserDetails withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("full_name")
    public String fullName;
    public UserDetails withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UserDetails withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_premier")
    public Boolean isPremier;
    public UserDetails withIsPremier(Boolean isPremier) {
        this.isPremier = isPremier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_premier_parent")
    public Boolean isPremierParent;
    public UserDetails withIsPremierParent(Boolean isPremierParent) {
        this.isPremierParent = isPremierParent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public UserDetails withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public UserDetails withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("only_enhanced_license")
    public Boolean onlyEnhancedLicense;
    public UserDetails withOnlyEnhancedLicense(Boolean onlyEnhancedLicense) {
        this.onlyEnhancedLicense = onlyEnhancedLicense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("only_sensitive_use")
    public Boolean onlySensitiveUse;
    public UserDetails withOnlySensitiveUse(Boolean onlySensitiveUse) {
        this.onlySensitiveUse = onlySensitiveUse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_id")
    public String organizationId;
    public UserDetails withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("premier_permissions")
    public String[] premierPermissions;
    public UserDetails withPremierPermissions(String[] premierPermissions) {
        this.premierPermissions = premierPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public UserDetails withUsername(String username) {
        this.username = username;
        return this;
    }
}