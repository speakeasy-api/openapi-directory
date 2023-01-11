package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceCameraSenseRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioDetection")
    public UpdateDeviceCameraSenseRequestBodyAudioDetection audioDetection;
    public UpdateDeviceCameraSenseRequestBody withAudioDetection(UpdateDeviceCameraSenseRequestBodyAudioDetection audioDetection) {
        this.audioDetection = audioDetection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectionModelId")
    public String detectionModelId;
    public UpdateDeviceCameraSenseRequestBody withDetectionModelId(String detectionModelId) {
        this.detectionModelId = detectionModelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mqttBrokerId")
    public String mqttBrokerId;
    public UpdateDeviceCameraSenseRequestBody withMqttBrokerId(String mqttBrokerId) {
        this.mqttBrokerId = mqttBrokerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("senseEnabled")
    public Boolean senseEnabled;
    public UpdateDeviceCameraSenseRequestBody withSenseEnabled(Boolean senseEnabled) {
        this.senseEnabled = senseEnabled;
        return this;
    }
}