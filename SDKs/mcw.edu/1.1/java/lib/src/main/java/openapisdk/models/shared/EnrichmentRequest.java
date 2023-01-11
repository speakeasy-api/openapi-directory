package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnrichmentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspect")
    public String aspect;
    public EnrichmentRequest withAspect(String aspect) {
        this.aspect = aspect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genes")
    public String[] genes;
    public EnrichmentRequest withGenes(String[] genes) {
        this.genes = genes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("species")
    public String species;
    public EnrichmentRequest withSpecies(String species) {
        this.species = species;
        return this;
    }
}