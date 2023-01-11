package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AppDeviceIdRequest {
    @JsonProperty("app_id")
    public String appId;
    public AppDeviceIdRequest withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}