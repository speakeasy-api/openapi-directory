package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetableRemarketingListsListResponse
 * Targetable remarketing list response
**/
public class TargetableRemarketingListsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public TargetableRemarketingListsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public TargetableRemarketingListsListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetableRemarketingLists")
    public TargetableRemarketingList[] targetableRemarketingLists;
    public TargetableRemarketingListsListResponse withTargetableRemarketingLists(TargetableRemarketingList[] targetableRemarketingLists) {
        this.targetableRemarketingLists = targetableRemarketingLists;
        return this;
    }
}