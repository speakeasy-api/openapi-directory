package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class D2PAssociationResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associations")
    public D2PAssociation[] associations;
    public D2PAssociationResults withAssociations(D2PAssociation[] associations) {
        this.associations = associations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compact_associations")
    public CompactAssociationSet[] compactAssociations;
    public D2PAssociationResults withCompactAssociations(CompactAssociationSet[] compactAssociations) {
        this.compactAssociations = compactAssociations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("docs")
    public java.util.Map<String, Object>[] docs;
    public D2PAssociationResults withDocs(java.util.Map<String, Object>[] docs) {
        this.docs = docs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facet_counts")
    public java.util.Map<String, Object> facetCounts;
    public D2PAssociationResults withFacetCounts(java.util.Map<String, Object> facetCounts) {
        this.facetCounts = facetCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highlighting")
    public java.util.Map<String, Object> highlighting;
    public D2PAssociationResults withHighlighting(java.util.Map<String, Object> highlighting) {
        this.highlighting = highlighting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numFound")
    public Long numFound;
    public D2PAssociationResults withNumFound(Long numFound) {
        this.numFound = numFound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objects")
    public String[] objects;
    public D2PAssociationResults withObjects(String[] objects) {
        this.objects = objects;
        return this;
    }
}