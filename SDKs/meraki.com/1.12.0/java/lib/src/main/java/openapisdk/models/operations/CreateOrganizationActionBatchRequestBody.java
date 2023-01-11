package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrganizationActionBatchRequestBody {
    @JsonProperty("actions")
    public CreateOrganizationActionBatchRequestBodyActions[] actions;
    public CreateOrganizationActionBatchRequestBody withActions(CreateOrganizationActionBatchRequestBodyActions[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmed")
    public Boolean confirmed;
    public CreateOrganizationActionBatchRequestBody withConfirmed(Boolean confirmed) {
        this.confirmed = confirmed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("synchronous")
    public Boolean synchronous;
    public CreateOrganizationActionBatchRequestBody withSynchronous(Boolean synchronous) {
        this.synchronous = synchronous;
        return this;
    }
}