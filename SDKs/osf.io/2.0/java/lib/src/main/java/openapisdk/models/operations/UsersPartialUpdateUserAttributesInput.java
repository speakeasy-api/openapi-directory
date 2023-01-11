package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsersPartialUpdateUserAttributesInput
 * The properties of the user entity.
**/
public class UsersPartialUpdateUserAttributesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("family_name")
    public String familyName;
    public UsersPartialUpdateUserAttributesInput withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonProperty("full_name")
    public String fullName;
    public UsersPartialUpdateUserAttributesInput withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("given_name")
    public String givenName;
    public UsersPartialUpdateUserAttributesInput withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public UsersPartialUpdateUserAttributesInput withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middle_names")
    public String middleNames;
    public UsersPartialUpdateUserAttributesInput withMiddleNames(String middleNames) {
        this.middleNames = middleNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public UsersPartialUpdateUserAttributesInput withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public UsersPartialUpdateUserAttributesInput withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}