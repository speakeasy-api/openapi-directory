package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourceCompliance
 * Compliance data for an OS policy resource.
**/
public class OsPolicyResourceCompliance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configSteps")
    public OsPolicyResourceConfigStep[] configSteps;
    public OsPolicyResourceCompliance withConfigSteps(OsPolicyResourceConfigStep[] configSteps) {
        this.configSteps = configSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("execResourceOutput")
    public OsPolicyResourceComplianceExecResourceOutput execResourceOutput;
    public OsPolicyResourceCompliance withExecResourceOutput(OsPolicyResourceComplianceExecResourceOutput execResourceOutput) {
        this.execResourceOutput = execResourceOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osPolicyResourceId")
    public String osPolicyResourceId;
    public OsPolicyResourceCompliance withOsPolicyResourceId(String osPolicyResourceId) {
        this.osPolicyResourceId = osPolicyResourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public OsPolicyResourceComplianceStateEnum state;
    public OsPolicyResourceCompliance withState(OsPolicyResourceComplianceStateEnum state) {
        this.state = state;
        return this;
    }
}