package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleHomeEnterpriseSdmV1ParentRelation
 * Represents device relationships, for instance, structure/room to which the device is assigned to.
**/
public class GoogleHomeEnterpriseSdmV1ParentRelation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleHomeEnterpriseSdmV1ParentRelation withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public GoogleHomeEnterpriseSdmV1ParentRelation withParent(String parent) {
        this.parent = parent;
        return this;
    }
}