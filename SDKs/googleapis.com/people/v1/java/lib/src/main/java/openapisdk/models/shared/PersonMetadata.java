package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersonMetadata
 * The metadata about a person.
**/
public class PersonMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public PersonMetadata withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedPeopleResourceNames")
    public String[] linkedPeopleResourceNames;
    public PersonMetadata withLinkedPeopleResourceNames(String[] linkedPeopleResourceNames) {
        this.linkedPeopleResourceNames = linkedPeopleResourceNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectType")
    public PersonMetadataObjectTypeEnum objectType;
    public PersonMetadata withObjectType(PersonMetadataObjectTypeEnum objectType) {
        this.objectType = objectType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousResourceNames")
    public String[] previousResourceNames;
    public PersonMetadata withPreviousResourceNames(String[] previousResourceNames) {
        this.previousResourceNames = previousResourceNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public Source[] sources;
    public PersonMetadata withSources(Source[] sources) {
        this.sources = sources;
        return this;
    }
}