package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObjectFilter
 * Object Filter.
**/
public class ObjectFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ObjectFilter withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectIds")
    public String[] objectIds;
    public ObjectFilter withObjectIds(String[] objectIds) {
        this.objectIds = objectIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ObjectFilterStatusEnum status;
    public ObjectFilter withStatus(ObjectFilterStatusEnum status) {
        this.status = status;
        return this;
    }
}