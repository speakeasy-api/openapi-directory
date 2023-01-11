package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SequenceLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("association_counts")
    public java.util.Map<String, Object> associationCounts;
    public SequenceLocation withAssociationCounts(java.util.Map<String, Object> associationCounts) {
        this.associationCounts = associationCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String[] category;
    public SequenceLocation withCategory(String[] category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consider")
    public String[] consider;
    public SequenceLocation withConsider(String[] consider) {
        this.consider = consider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deprecated")
    public Boolean deprecated;
    public SequenceLocation withDeprecated(Boolean deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SequenceLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public SequencePosition end;
    public SequenceLocation withEnd(SequencePosition end) {
        this.end = end;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public SequenceLocation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iri")
    public String iri;
    public SequenceLocation withIri(String iri) {
        this.iri = iri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public SequenceLocation withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phase")
    public Long phase;
    public SequenceLocation withPhase(Long phase) {
        this.phase = phase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replaced_by")
    public String[] replacedBy;
    public SequenceLocation withReplacedBy(String[] replacedBy) {
        this.replacedBy = replacedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Long score;
    public SequenceLocation withScore(Long score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public SequencePosition start;
    public SequenceLocation withStart(SequencePosition start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strand")
    public Long strand;
    public SequenceLocation withStrand(Long strand) {
        this.strand = strand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("synonyms")
    public SynonymPropertyValue[] synonyms;
    public SequenceLocation withSynonyms(SynonymPropertyValue[] synonyms) {
        this.synonyms = synonyms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxon")
    public Taxon taxon;
    public SequenceLocation withTaxon(Taxon taxon) {
        this.taxon = taxon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public String[] types;
    public SequenceLocation withTypes(String[] types) {
        this.types = types;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xrefs")
    public String[] xrefs;
    public SequenceLocation withXrefs(String[] xrefs) {
        this.xrefs = xrefs;
        return this;
    }
}