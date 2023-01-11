package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChangeRequest
 * Content of the change request
**/
public class ChangeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceptable")
    public Boolean acceptable;
    public ChangeRequest withAcceptable(Boolean acceptable) {
        this.acceptable = acceptable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changes")
    public ChangeRequestChanges changes;
    public ChangeRequest withChanges(ChangeRequestChanges changes) {
        this.changes = changes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created by")
    public String createdBy;
    public ChangeRequest withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ChangeRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ChangeRequest withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ChangeRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ChangeRequestStatusEnum status;
    public ChangeRequest withStatus(ChangeRequestStatusEnum status) {
        this.status = status;
        return this;
    }
}