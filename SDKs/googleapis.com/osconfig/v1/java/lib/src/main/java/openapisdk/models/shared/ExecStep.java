package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecStep
 * A step that runs an executable for a PatchJob.
**/
public class ExecStep {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linuxExecStepConfig")
    public ExecStepConfig linuxExecStepConfig;
    public ExecStep withLinuxExecStepConfig(ExecStepConfig linuxExecStepConfig) {
        this.linuxExecStepConfig = linuxExecStepConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windowsExecStepConfig")
    public ExecStepConfig windowsExecStepConfig;
    public ExecStep withWindowsExecStepConfig(ExecStepConfig windowsExecStepConfig) {
        this.windowsExecStepConfig = windowsExecStepConfig;
        return this;
    }
}