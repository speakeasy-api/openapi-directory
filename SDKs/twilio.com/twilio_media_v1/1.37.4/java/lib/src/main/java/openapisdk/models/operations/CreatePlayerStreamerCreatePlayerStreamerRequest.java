package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePlayerStreamerCreatePlayerStreamerRequest {
    @SpeakeasyMetadata("form:name=MaxDuration")
    public Long maxDuration;
    public CreatePlayerStreamerCreatePlayerStreamerRequest withMaxDuration(Long maxDuration) {
        this.maxDuration = maxDuration;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreatePlayerStreamerCreatePlayerStreamerRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum statusCallbackMethod;
    public CreatePlayerStreamerCreatePlayerStreamerRequest withStatusCallbackMethod(CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=Video")
    public Boolean video;
    public CreatePlayerStreamerCreatePlayerStreamerRequest withVideo(Boolean video) {
        this.video = video;
        return this;
    }
}