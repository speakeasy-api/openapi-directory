package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeSoftwareConfigInput
 * Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`
**/
public class RuntimeSoftwareConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customGpuDriverPath")
    public String customGpuDriverPath;
    public RuntimeSoftwareConfigInput withCustomGpuDriverPath(String customGpuDriverPath) {
        this.customGpuDriverPath = customGpuDriverPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableTerminal")
    public Boolean disableTerminal;
    public RuntimeSoftwareConfigInput withDisableTerminal(Boolean disableTerminal) {
        this.disableTerminal = disableTerminal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableHealthMonitoring")
    public Boolean enableHealthMonitoring;
    public RuntimeSoftwareConfigInput withEnableHealthMonitoring(Boolean enableHealthMonitoring) {
        this.enableHealthMonitoring = enableHealthMonitoring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idleShutdown")
    public Boolean idleShutdown;
    public RuntimeSoftwareConfigInput withIdleShutdown(Boolean idleShutdown) {
        this.idleShutdown = idleShutdown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idleShutdownTimeout")
    public Integer idleShutdownTimeout;
    public RuntimeSoftwareConfigInput withIdleShutdownTimeout(Integer idleShutdownTimeout) {
        this.idleShutdownTimeout = idleShutdownTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installGpuDriver")
    public Boolean installGpuDriver;
    public RuntimeSoftwareConfigInput withInstallGpuDriver(Boolean installGpuDriver) {
        this.installGpuDriver = installGpuDriver;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kernels")
    public ContainerImage[] kernels;
    public RuntimeSoftwareConfigInput withKernels(ContainerImage[] kernels) {
        this.kernels = kernels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notebookUpgradeSchedule")
    public String notebookUpgradeSchedule;
    public RuntimeSoftwareConfigInput withNotebookUpgradeSchedule(String notebookUpgradeSchedule) {
        this.notebookUpgradeSchedule = notebookUpgradeSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postStartupScript")
    public String postStartupScript;
    public RuntimeSoftwareConfigInput withPostStartupScript(String postStartupScript) {
        this.postStartupScript = postStartupScript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postStartupScriptBehavior")
    public RuntimeSoftwareConfigPostStartupScriptBehaviorEnum postStartupScriptBehavior;
    public RuntimeSoftwareConfigInput withPostStartupScriptBehavior(RuntimeSoftwareConfigPostStartupScriptBehaviorEnum postStartupScriptBehavior) {
        this.postStartupScriptBehavior = postStartupScriptBehavior;
        return this;
    }
}