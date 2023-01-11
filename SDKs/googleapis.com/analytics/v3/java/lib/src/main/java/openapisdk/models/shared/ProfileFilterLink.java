package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProfileFilterLink
 * JSON template for an Analytics profile filter link.
**/
public class ProfileFilterLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterRef")
    public FilterRef filterRef;
    public ProfileFilterLink withFilterRef(FilterRef filterRef) {
        this.filterRef = filterRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ProfileFilterLink withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ProfileFilterLink withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileRef")
    public ProfileRef profileRef;
    public ProfileFilterLink withProfileRef(ProfileRef profileRef) {
        this.profileRef = profileRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Integer rank;
    public ProfileFilterLink withRank(Integer rank) {
        this.rank = rank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public ProfileFilterLink withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
}