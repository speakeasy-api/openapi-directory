package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociationResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associations")
    public Association[] associations;
    public AssociationResults withAssociations(Association[] associations) {
        this.associations = associations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compact_associations")
    public CompactAssociationSet[] compactAssociations;
    public AssociationResults withCompactAssociations(CompactAssociationSet[] compactAssociations) {
        this.compactAssociations = compactAssociations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("docs")
    public java.util.Map<String, Object>[] docs;
    public AssociationResults withDocs(java.util.Map<String, Object>[] docs) {
        this.docs = docs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facet_counts")
    public java.util.Map<String, Object> facetCounts;
    public AssociationResults withFacetCounts(java.util.Map<String, Object> facetCounts) {
        this.facetCounts = facetCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highlighting")
    public java.util.Map<String, Object> highlighting;
    public AssociationResults withHighlighting(java.util.Map<String, Object> highlighting) {
        this.highlighting = highlighting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numFound")
    public Long numFound;
    public AssociationResults withNumFound(Long numFound) {
        this.numFound = numFound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objects")
    public String[] objects;
    public AssociationResults withObjects(String[] objects) {
        this.objects = objects;
        return this;
    }
}