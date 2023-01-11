package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConceptLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concept_id")
    public Long conceptId;
    public ConceptLinks withConceptId(Long conceptId) {
        this.conceptId = conceptId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concept_name")
    public String conceptName;
    public ConceptLinks withConceptName(String conceptName) {
        this.conceptName = conceptName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concept_status")
    public String conceptStatus;
    public ConceptLinks withConceptStatus(String conceptStatus) {
        this.conceptStatus = conceptStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concept_type")
    public String conceptType;
    public ConceptLinks withConceptType(String conceptType) {
        this.conceptType = conceptType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_times_tag")
    public Long isTimesTag;
    public ConceptLinks withIsTimesTag(Long isTimesTag) {
        this.isTimesTag = isTimesTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public ConceptLinks withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link_id")
    public Long linkId;
    public ConceptLinks withLinkId(Long linkId) {
        this.linkId = linkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link_type")
    public String linkType;
    public ConceptLinks withLinkType(String linkType) {
        this.linkType = linkType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mapping_type")
    public String mappingType;
    public ConceptLinks withMappingType(String mappingType) {
        this.mappingType = mappingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relation")
    public String relation;
    public ConceptLinks withRelation(String relation) {
        this.relation = relation;
        return this;
    }
}