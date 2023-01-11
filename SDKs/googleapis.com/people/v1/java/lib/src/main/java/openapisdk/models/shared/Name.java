package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Name
 * A person's name. If the name is a mononym, the family name is empty.
**/
public class Name {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Name withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayNameLastFirst")
    public String displayNameLastFirst;
    public Name withDisplayNameLastFirst(String displayNameLastFirst) {
        this.displayNameLastFirst = displayNameLastFirst;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("familyName")
    public String familyName;
    public Name withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("givenName")
    public String givenName;
    public Name withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("honorificPrefix")
    public String honorificPrefix;
    public Name withHonorificPrefix(String honorificPrefix) {
        this.honorificPrefix = honorificPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("honorificSuffix")
    public String honorificSuffix;
    public Name withHonorificSuffix(String honorificSuffix) {
        this.honorificSuffix = honorificSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadata metadata;
    public Name withMetadata(FieldMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middleName")
    public String middleName;
    public Name withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneticFamilyName")
    public String phoneticFamilyName;
    public Name withPhoneticFamilyName(String phoneticFamilyName) {
        this.phoneticFamilyName = phoneticFamilyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneticFullName")
    public String phoneticFullName;
    public Name withPhoneticFullName(String phoneticFullName) {
        this.phoneticFullName = phoneticFullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneticGivenName")
    public String phoneticGivenName;
    public Name withPhoneticGivenName(String phoneticGivenName) {
        this.phoneticGivenName = phoneticGivenName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneticHonorificPrefix")
    public String phoneticHonorificPrefix;
    public Name withPhoneticHonorificPrefix(String phoneticHonorificPrefix) {
        this.phoneticHonorificPrefix = phoneticHonorificPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneticHonorificSuffix")
    public String phoneticHonorificSuffix;
    public Name withPhoneticHonorificSuffix(String phoneticHonorificSuffix) {
        this.phoneticHonorificSuffix = phoneticHonorificSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneticMiddleName")
    public String phoneticMiddleName;
    public Name withPhoneticMiddleName(String phoneticMiddleName) {
        this.phoneticMiddleName = phoneticMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unstructuredName")
    public String unstructuredName;
    public Name withUnstructuredName(String unstructuredName) {
        this.unstructuredName = unstructuredName;
        return this;
    }
}