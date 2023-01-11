package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCompositionHookCreateCompositionHookRequest {
    @SpeakeasyMetadata("form:name=AudioSources")
    public String[] audioSources;
    public CreateCompositionHookCreateCompositionHookRequest withAudioSources(String[] audioSources) {
        this.audioSources = audioSources;
        return this;
    }
    @SpeakeasyMetadata("form:name=AudioSourcesExcluded")
    public String[] audioSourcesExcluded;
    public CreateCompositionHookCreateCompositionHookRequest withAudioSourcesExcluded(String[] audioSourcesExcluded) {
        this.audioSourcesExcluded = audioSourcesExcluded;
        return this;
    }
    @SpeakeasyMetadata("form:name=Enabled")
    public Boolean enabled;
    public CreateCompositionHookCreateCompositionHookRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=Format")
    public openapisdk.models.shared.CompositionHookEnumFormatEnum format;
    public CreateCompositionHookCreateCompositionHookRequest withFormat(openapisdk.models.shared.CompositionHookEnumFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateCompositionHookCreateCompositionHookRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Resolution")
    public String resolution;
    public CreateCompositionHookCreateCompositionHookRequest withResolution(String resolution) {
        this.resolution = resolution;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateCompositionHookCreateCompositionHookRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum statusCallbackMethod;
    public CreateCompositionHookCreateCompositionHookRequest withStatusCallbackMethod(CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=Trim")
    public Boolean trim;
    public CreateCompositionHookCreateCompositionHookRequest withTrim(Boolean trim) {
        this.trim = trim;
        return this;
    }
    @SpeakeasyMetadata("form:name=VideoLayout")
    public Object videoLayout;
    public CreateCompositionHookCreateCompositionHookRequest withVideoLayout(Object videoLayout) {
        this.videoLayout = videoLayout;
        return this;
    }
}