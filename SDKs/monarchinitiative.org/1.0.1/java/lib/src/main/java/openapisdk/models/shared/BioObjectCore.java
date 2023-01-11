package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BioObjectCore {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String[] category;
    public BioObjectCore withCategory(String[] category) {
        this.category = category;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public BioObjectCore withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iri")
    public String iri;
    public BioObjectCore withIri(String iri) {
        this.iri = iri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public BioObjectCore withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxon")
    public Taxon taxon;
    public BioObjectCore withTaxon(Taxon taxon) {
        this.taxon = taxon;
        return this;
    }
}