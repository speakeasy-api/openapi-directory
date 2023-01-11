package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder
 * Identifies the entity that executed the recipe, which is trusted to have correctly performed the operation and populated this provenance.
**/
public class GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder withId(String id) {
        this.id = id;
        return this;
    }
}