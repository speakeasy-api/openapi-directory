package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CopyOtherContactToMyContactsGroupRequest
 * A request to copy an "Other contact" to my contacts group.
**/
public class CopyOtherContactToMyContactsGroupRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyMask")
    public String copyMask;
    public CopyOtherContactToMyContactsGroupRequest withCopyMask(String copyMask) {
        this.copyMask = copyMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readMask")
    public String readMask;
    public CopyOtherContactToMyContactsGroupRequest withReadMask(String readMask) {
        this.readMask = readMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public CopyOtherContactToMyContactsGroupRequestSourcesEnum[] sources;
    public CopyOtherContactToMyContactsGroupRequest withSources(CopyOtherContactToMyContactsGroupRequestSourcesEnum[] sources) {
        this.sources = sources;
        return this;
    }
}