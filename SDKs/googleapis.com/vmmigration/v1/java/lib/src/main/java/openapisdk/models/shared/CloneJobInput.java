package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloneJobInput
 * CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.
**/
public class CloneJobInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeEngineTargetDetails")
    public ComputeEngineTargetDetails computeEngineTargetDetails;
    public CloneJobInput withComputeEngineTargetDetails(ComputeEngineTargetDetails computeEngineTargetDetails) {
        this.computeEngineTargetDetails = computeEngineTargetDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public CloneJobInput withError(Status error) {
        this.error = error;
        return this;
    }
}