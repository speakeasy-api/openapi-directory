package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemarketingListShare
 * Contains properties of a remarketing list's sharing information. Sharing allows other accounts or advertisers to target to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and advertisers.
**/
public class RemarketingListShare {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RemarketingListShare withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remarketingListId")
    public String remarketingListId;
    public RemarketingListShare withRemarketingListId(String remarketingListId) {
        this.remarketingListId = remarketingListId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharedAccountIds")
    public String[] sharedAccountIds;
    public RemarketingListShare withSharedAccountIds(String[] sharedAccountIds) {
        this.sharedAccountIds = sharedAccountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharedAdvertiserIds")
    public String[] sharedAdvertiserIds;
    public RemarketingListShare withSharedAdvertiserIds(String[] sharedAdvertiserIds) {
        this.sharedAdvertiserIds = sharedAdvertiserIds;
        return this;
    }
}