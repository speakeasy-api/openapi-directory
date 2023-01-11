package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketOwner
 * The owner of the bucket. This is always the project team's owner group.
**/
public class BucketOwner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity")
    public String entity;
    public BucketOwner withEntity(String entity) {
        this.entity = entity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityId")
    public String entityId;
    public BucketOwner withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
}