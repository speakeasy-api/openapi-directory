package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceStatus
 * VM instance status.
**/
public class InstanceStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public InstanceStatus withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisioningModel")
    public InstanceStatusProvisioningModelEnum provisioningModel;
    public InstanceStatus withProvisioningModel(InstanceStatusProvisioningModelEnum provisioningModel) {
        this.provisioningModel = provisioningModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskPack")
    public String taskPack;
    public InstanceStatus withTaskPack(String taskPack) {
        this.taskPack = taskPack;
        return this;
    }
}