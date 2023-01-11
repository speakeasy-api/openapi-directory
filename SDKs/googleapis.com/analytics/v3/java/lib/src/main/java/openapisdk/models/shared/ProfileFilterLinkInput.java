package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProfileFilterLinkInput
 * JSON template for an Analytics profile filter link.
**/
public class ProfileFilterLinkInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterRef")
    public FilterRefInput filterRef;
    public ProfileFilterLinkInput withFilterRef(FilterRefInput filterRef) {
        this.filterRef = filterRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ProfileFilterLinkInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileRef")
    public ProfileRef profileRef;
    public ProfileFilterLinkInput withProfileRef(ProfileRef profileRef) {
        this.profileRef = profileRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Integer rank;
    public ProfileFilterLinkInput withRank(Integer rank) {
        this.rank = rank;
        return this;
    }
}