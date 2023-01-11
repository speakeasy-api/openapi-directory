package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IssueTokenRequestFlags
 * Object representing flags that potentialy modify this transaction
**/
public class IssueTokenRequestFlags {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("splitChange")
    public Boolean splitChange;
    public IssueTokenRequestFlags withSplitChange(Boolean splitChange) {
        this.splitChange = splitChange;
        return this;
    }
}