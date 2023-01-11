package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersonName
 * An object representation of the individual components of a person's name.
**/
public class PersonName {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("familyName")
    public String familyName;
    public PersonName withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formatted")
    public String formatted;
    public PersonName withFormatted(String formatted) {
        this.formatted = formatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("givenName")
    public String givenName;
    public PersonName withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("honorificPrefix")
    public String honorificPrefix;
    public PersonName withHonorificPrefix(String honorificPrefix) {
        this.honorificPrefix = honorificPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("honorificSuffix")
    public String honorificSuffix;
    public PersonName withHonorificSuffix(String honorificSuffix) {
        this.honorificSuffix = honorificSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middleName")
    public String middleName;
    public PersonName withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
}