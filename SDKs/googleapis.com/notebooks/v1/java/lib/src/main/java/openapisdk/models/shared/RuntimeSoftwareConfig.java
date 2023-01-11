package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeSoftwareConfig
 * Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`
**/
public class RuntimeSoftwareConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customGpuDriverPath")
    public String customGpuDriverPath;
    public RuntimeSoftwareConfig withCustomGpuDriverPath(String customGpuDriverPath) {
        this.customGpuDriverPath = customGpuDriverPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableTerminal")
    public Boolean disableTerminal;
    public RuntimeSoftwareConfig withDisableTerminal(Boolean disableTerminal) {
        this.disableTerminal = disableTerminal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableHealthMonitoring")
    public Boolean enableHealthMonitoring;
    public RuntimeSoftwareConfig withEnableHealthMonitoring(Boolean enableHealthMonitoring) {
        this.enableHealthMonitoring = enableHealthMonitoring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idleShutdown")
    public Boolean idleShutdown;
    public RuntimeSoftwareConfig withIdleShutdown(Boolean idleShutdown) {
        this.idleShutdown = idleShutdown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idleShutdownTimeout")
    public Integer idleShutdownTimeout;
    public RuntimeSoftwareConfig withIdleShutdownTimeout(Integer idleShutdownTimeout) {
        this.idleShutdownTimeout = idleShutdownTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installGpuDriver")
    public Boolean installGpuDriver;
    public RuntimeSoftwareConfig withInstallGpuDriver(Boolean installGpuDriver) {
        this.installGpuDriver = installGpuDriver;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kernels")
    public ContainerImage[] kernels;
    public RuntimeSoftwareConfig withKernels(ContainerImage[] kernels) {
        this.kernels = kernels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notebookUpgradeSchedule")
    public String notebookUpgradeSchedule;
    public RuntimeSoftwareConfig withNotebookUpgradeSchedule(String notebookUpgradeSchedule) {
        this.notebookUpgradeSchedule = notebookUpgradeSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postStartupScript")
    public String postStartupScript;
    public RuntimeSoftwareConfig withPostStartupScript(String postStartupScript) {
        this.postStartupScript = postStartupScript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postStartupScriptBehavior")
    public RuntimeSoftwareConfigPostStartupScriptBehaviorEnum postStartupScriptBehavior;
    public RuntimeSoftwareConfig withPostStartupScriptBehavior(RuntimeSoftwareConfigPostStartupScriptBehaviorEnum postStartupScriptBehavior) {
        this.postStartupScriptBehavior = postStartupScriptBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgradeable")
    public Boolean upgradeable;
    public RuntimeSoftwareConfig withUpgradeable(Boolean upgradeable) {
        this.upgradeable = upgradeable;
        return this;
    }
}