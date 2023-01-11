package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InconclusiveDetail
 * Details for an outcome with an INCONCLUSIVE outcome summary.
**/
public class InconclusiveDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abortedByUser")
    public Boolean abortedByUser;
    public InconclusiveDetail withAbortedByUser(Boolean abortedByUser) {
        this.abortedByUser = abortedByUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasErrorLogs")
    public Boolean hasErrorLogs;
    public InconclusiveDetail withHasErrorLogs(Boolean hasErrorLogs) {
        this.hasErrorLogs = hasErrorLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infrastructureFailure")
    public Boolean infrastructureFailure;
    public InconclusiveDetail withInfrastructureFailure(Boolean infrastructureFailure) {
        this.infrastructureFailure = infrastructureFailure;
        return this;
    }
}