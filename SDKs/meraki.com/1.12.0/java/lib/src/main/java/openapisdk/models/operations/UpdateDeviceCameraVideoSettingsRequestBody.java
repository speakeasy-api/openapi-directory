package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceCameraVideoSettingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalRtspEnabled")
    public Boolean externalRtspEnabled;
    public UpdateDeviceCameraVideoSettingsRequestBody withExternalRtspEnabled(Boolean externalRtspEnabled) {
        this.externalRtspEnabled = externalRtspEnabled;
        return this;
    }
}