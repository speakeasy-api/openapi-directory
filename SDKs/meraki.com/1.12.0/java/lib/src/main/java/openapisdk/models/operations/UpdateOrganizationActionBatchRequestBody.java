package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationActionBatchRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmed")
    public Boolean confirmed;
    public UpdateOrganizationActionBatchRequestBody withConfirmed(Boolean confirmed) {
        this.confirmed = confirmed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("synchronous")
    public Boolean synchronous;
    public UpdateOrganizationActionBatchRequestBody withSynchronous(Boolean synchronous) {
        this.synchronous = synchronous;
        return this;
    }
}