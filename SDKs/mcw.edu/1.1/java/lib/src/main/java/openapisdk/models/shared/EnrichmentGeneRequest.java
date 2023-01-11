package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnrichmentGeneRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accId")
    public String accId;
    public EnrichmentGeneRequest withAccId(String accId) {
        this.accId = accId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geneSymbols")
    public String[] geneSymbols;
    public EnrichmentGeneRequest withGeneSymbols(String[] geneSymbols) {
        this.geneSymbols = geneSymbols;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("species")
    public String species;
    public EnrichmentGeneRequest withSpecies(String species) {
        this.species = species;
        return this;
    }
}