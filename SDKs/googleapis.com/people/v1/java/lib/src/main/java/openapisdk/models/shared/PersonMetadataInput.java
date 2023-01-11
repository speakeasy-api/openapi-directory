package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersonMetadataInput
 * The metadata about a person.
**/
public class PersonMetadataInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public SourceInput[] sources;
    public PersonMetadataInput withSources(SourceInput[] sources) {
        this.sources = sources;
        return this;
    }
}