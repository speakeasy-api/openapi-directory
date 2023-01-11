package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NameInput
 * A person's name. If the name is a mononym, the family name is empty.
**/
public class NameInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("familyName")
    public String familyName;
    public NameInput withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("givenName")
    public String givenName;
    public NameInput withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("honorificPrefix")
    public String honorificPrefix;
    public NameInput withHonorificPrefix(String honorificPrefix) {
        this.honorificPrefix = honorificPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("honorificSuffix")
    public String honorificSuffix;
    public NameInput withHonorificSuffix(String honorificSuffix) {
        this.honorificSuffix = honorificSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadataInput metadata;
    public NameInput withMetadata(FieldMetadataInput metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middleName")
    public String middleName;
    public NameInput withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneticFamilyName")
    public String phoneticFamilyName;
    public NameInput withPhoneticFamilyName(String phoneticFamilyName) {
        this.phoneticFamilyName = phoneticFamilyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneticFullName")
    public String phoneticFullName;
    public NameInput withPhoneticFullName(String phoneticFullName) {
        this.phoneticFullName = phoneticFullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneticGivenName")
    public String phoneticGivenName;
    public NameInput withPhoneticGivenName(String phoneticGivenName) {
        this.phoneticGivenName = phoneticGivenName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneticHonorificPrefix")
    public String phoneticHonorificPrefix;
    public NameInput withPhoneticHonorificPrefix(String phoneticHonorificPrefix) {
        this.phoneticHonorificPrefix = phoneticHonorificPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneticHonorificSuffix")
    public String phoneticHonorificSuffix;
    public NameInput withPhoneticHonorificSuffix(String phoneticHonorificSuffix) {
        this.phoneticHonorificSuffix = phoneticHonorificSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneticMiddleName")
    public String phoneticMiddleName;
    public NameInput withPhoneticMiddleName(String phoneticMiddleName) {
        this.phoneticMiddleName = phoneticMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unstructuredName")
    public String unstructuredName;
    public NameInput withUnstructuredName(String unstructuredName) {
        this.unstructuredName = unstructuredName;
        return this;
    }
}