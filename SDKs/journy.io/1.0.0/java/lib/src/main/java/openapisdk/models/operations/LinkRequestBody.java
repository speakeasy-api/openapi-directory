package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LinkRequestBody
 * Link web activity to user
**/
public class LinkRequestBody {
    @JsonProperty("deviceId")
    public String deviceId;
    public LinkRequestBody withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonProperty("identification")
    public LinkRequestBodyIdentification identification;
    public LinkRequestBody withIdentification(LinkRequestBodyIdentification identification) {
        this.identification = identification;
        return this;
    }
}