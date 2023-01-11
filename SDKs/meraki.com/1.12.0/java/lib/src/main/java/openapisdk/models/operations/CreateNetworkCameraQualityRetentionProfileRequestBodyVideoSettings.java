package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings
 * Video quality and resolution settings for all the camera models.
**/
public class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MV12/MV22/MV72")
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 mv12Mv22Mv72;
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings withMv12Mv22Mv72(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 mv12Mv22Mv72) {
        this.mv12Mv22Mv72 = mv12Mv22Mv72;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MV12WE")
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We mv12WE;
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings withMv12We(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We mv12WE) {
        this.mv12WE = mv12WE;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MV21/MV71")
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 mv21Mv71;
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings withMv21Mv71(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 mv21Mv71) {
        this.mv21Mv71 = mv21Mv71;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MV22X/MV72X")
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X mv22XMv72X;
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings withMv22XMv72X(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X mv22XMv72X) {
        this.mv22XMv72X = mv22XMv72X;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MV32")
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 mv32;
    public CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings withMv32(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 mv32) {
        this.mv32 = mv32;
        return this;
    }
}