package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VendorWithNeeds {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchedNeeds")
    public FileNeedsVendor[] matchedNeeds;
    public VendorWithNeeds withMatchedNeeds(FileNeedsVendor[] matchedNeeds) {
        this.matchedNeeds = matchedNeeds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public Long userId;
    public VendorWithNeeds withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}