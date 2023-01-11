package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatchConfig
 * Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.
**/
public class PatchConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apt")
    public AptSettings apt;
    public PatchConfig withApt(AptSettings apt) {
        this.apt = apt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goo")
    public java.util.Map<String, Object> goo;
    public PatchConfig withGoo(java.util.Map<String, Object> goo) {
        this.goo = goo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("migInstancesAllowed")
    public Boolean migInstancesAllowed;
    public PatchConfig withMigInstancesAllowed(Boolean migInstancesAllowed) {
        this.migInstancesAllowed = migInstancesAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postStep")
    public ExecStep postStep;
    public PatchConfig withPostStep(ExecStep postStep) {
        this.postStep = postStep;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preStep")
    public ExecStep preStep;
    public PatchConfig withPreStep(ExecStep preStep) {
        this.preStep = preStep;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rebootConfig")
    public PatchConfigRebootConfigEnum rebootConfig;
    public PatchConfig withRebootConfig(PatchConfigRebootConfigEnum rebootConfig) {
        this.rebootConfig = rebootConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windowsUpdate")
    public WindowsUpdateSettings windowsUpdate;
    public PatchConfig withWindowsUpdate(WindowsUpdateSettings windowsUpdate) {
        this.windowsUpdate = windowsUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yum")
    public YumSettings yum;
    public PatchConfig withYum(YumSettings yum) {
        this.yum = yum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zypper")
    public ZypperSettings zypper;
    public PatchConfig withZypper(ZypperSettings zypper) {
        this.zypper = zypper;
        return this;
    }
}