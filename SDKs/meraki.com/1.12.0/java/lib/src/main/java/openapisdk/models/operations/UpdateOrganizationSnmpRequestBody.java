package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationSnmpRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("peerIps")
    public String[] peerIps;
    public UpdateOrganizationSnmpRequestBody withPeerIps(String[] peerIps) {
        this.peerIps = peerIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("v2cEnabled")
    public Boolean v2cEnabled;
    public UpdateOrganizationSnmpRequestBody withV2cEnabled(Boolean v2cEnabled) {
        this.v2cEnabled = v2cEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("v3AuthMode")
    public UpdateOrganizationSnmpRequestBodyV3AuthModeEnum v3AuthMode;
    public UpdateOrganizationSnmpRequestBody withV3AuthMode(UpdateOrganizationSnmpRequestBodyV3AuthModeEnum v3AuthMode) {
        this.v3AuthMode = v3AuthMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("v3AuthPass")
    public String v3AuthPass;
    public UpdateOrganizationSnmpRequestBody withV3AuthPass(String v3AuthPass) {
        this.v3AuthPass = v3AuthPass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("v3Enabled")
    public Boolean v3Enabled;
    public UpdateOrganizationSnmpRequestBody withV3Enabled(Boolean v3Enabled) {
        this.v3Enabled = v3Enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("v3PrivMode")
    public UpdateOrganizationSnmpRequestBodyV3PrivModeEnum v3PrivMode;
    public UpdateOrganizationSnmpRequestBody withV3PrivMode(UpdateOrganizationSnmpRequestBodyV3PrivModeEnum v3PrivMode) {
        this.v3PrivMode = v3PrivMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("v3PrivPass")
    public String v3PrivPass;
    public UpdateOrganizationSnmpRequestBody withV3PrivPass(String v3PrivPass) {
        this.v3PrivPass = v3PrivPass;
        return this;
    }
}