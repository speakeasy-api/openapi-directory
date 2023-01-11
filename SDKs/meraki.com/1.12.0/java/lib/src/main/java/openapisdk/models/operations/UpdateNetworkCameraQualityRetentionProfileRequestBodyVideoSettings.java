package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings
 * Video quality and resolution settings for all the camera models.
**/
public class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MV12/MV22/MV72")
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 mv12Mv22Mv72;
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings withMv12Mv22Mv72(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 mv12Mv22Mv72) {
        this.mv12Mv22Mv72 = mv12Mv22Mv72;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MV12WE")
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We mv12WE;
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings withMv12We(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We mv12WE) {
        this.mv12WE = mv12WE;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MV21/MV71")
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 mv21Mv71;
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings withMv21Mv71(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 mv21Mv71) {
        this.mv21Mv71 = mv21Mv71;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MV22X/MV72X")
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X mv22XMv72X;
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings withMv22XMv72X(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X mv22XMv72X) {
        this.mv22XMv72X = mv22XMv72X;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MV32")
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 mv32;
    public UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings withMv32(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 mv32) {
        this.mv32 = mv32;
        return this;
    }
}