package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Committee {
    @JsonProperty("classification")
    public CommitteeClassificationEnum classification;
    public Committee withClassification(CommitteeClassificationEnum classification) {
        this.classification = classification;
        return this;
    }
    @JsonProperty("extras")
    public java.util.Map<String, Object> extras;
    public Committee withExtras(java.util.Map<String, Object> extras) {
        this.extras = extras;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Committee withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Link[] links;
    public Committee withLinks(Link[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberships")
    public CommitteeMembership[] memberships;
    public Committee withMemberships(CommitteeMembership[] memberships) {
        this.memberships = memberships;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Committee withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_names")
    public AltName[] otherNames;
    public Committee withOtherNames(AltName[] otherNames) {
        this.otherNames = otherNames;
        return this;
    }
    @JsonProperty("parent_id")
    public String parentId;
    public Committee withParentId(String parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public Link[] sources;
    public Committee withSources(Link[] sources) {
        this.sources = sources;
        return this;
    }
}