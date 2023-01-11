package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSettingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localStatusPageEnabled")
    public Boolean localStatusPageEnabled;
    public UpdateNetworkSettingsRequestBody withLocalStatusPageEnabled(Boolean localStatusPageEnabled) {
        this.localStatusPageEnabled = localStatusPageEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteStatusPageEnabled")
    public Boolean remoteStatusPageEnabled;
    public UpdateNetworkSettingsRequestBody withRemoteStatusPageEnabled(Boolean remoteStatusPageEnabled) {
        this.remoteStatusPageEnabled = remoteStatusPageEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secureConnect")
    public UpdateNetworkSettingsRequestBodySecureConnect secureConnect;
    public UpdateNetworkSettingsRequestBody withSecureConnect(UpdateNetworkSettingsRequestBodySecureConnect secureConnect) {
        this.secureConnect = secureConnect;
        return this;
    }
}