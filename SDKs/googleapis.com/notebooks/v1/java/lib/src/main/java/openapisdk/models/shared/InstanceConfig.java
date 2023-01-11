package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceConfig
 * Notebook instance configurations that can be updated.
**/
public class InstanceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableHealthMonitoring")
    public Boolean enableHealthMonitoring;
    public InstanceConfig withEnableHealthMonitoring(Boolean enableHealthMonitoring) {
        this.enableHealthMonitoring = enableHealthMonitoring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notebookUpgradeSchedule")
    public String notebookUpgradeSchedule;
    public InstanceConfig withNotebookUpgradeSchedule(String notebookUpgradeSchedule) {
        this.notebookUpgradeSchedule = notebookUpgradeSchedule;
        return this;
    }
}