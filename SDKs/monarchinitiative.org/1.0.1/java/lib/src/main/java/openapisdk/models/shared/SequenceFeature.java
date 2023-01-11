package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SequenceFeature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("association_counts")
    public java.util.Map<String, Object> associationCounts;
    public SequenceFeature withAssociationCounts(java.util.Map<String, Object> associationCounts) {
        this.associationCounts = associationCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String[] category;
    public SequenceFeature withCategory(String[] category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consider")
    public String[] consider;
    public SequenceFeature withConsider(String[] consider) {
        this.consider = consider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deprecated")
    public Boolean deprecated;
    public SequenceFeature withDeprecated(Boolean deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SequenceFeature withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homology_associations")
    public Association[] homologyAssociations;
    public SequenceFeature withHomologyAssociations(Association[] homologyAssociations) {
        this.homologyAssociations = homologyAssociations;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public SequenceFeature withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iri")
    public String iri;
    public SequenceFeature withIri(String iri) {
        this.iri = iri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public SequenceFeature withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locations")
    public SequenceLocation[] locations;
    public SequenceFeature withLocations(SequenceLocation[] locations) {
        this.locations = locations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replaced_by")
    public String[] replacedBy;
    public SequenceFeature withReplacedBy(String[] replacedBy) {
        this.replacedBy = replacedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seq")
    public Seq seq;
    public SequenceFeature withSeq(Seq seq) {
        this.seq = seq;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("synonyms")
    public SynonymPropertyValue[] synonyms;
    public SequenceFeature withSynonyms(SynonymPropertyValue[] synonyms) {
        this.synonyms = synonyms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxon")
    public Taxon taxon;
    public SequenceFeature withTaxon(Taxon taxon) {
        this.taxon = taxon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public String[] types;
    public SequenceFeature withTypes(String[] types) {
        this.types = types;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xrefs")
    public String[] xrefs;
    public SequenceFeature withXrefs(String[] xrefs) {
        this.xrefs = xrefs;
        return this;
    }
}