package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCompositionHookUpdateCompositionHookRequest {
    @SpeakeasyMetadata("form:name=AudioSources")
    public String[] audioSources;
    public UpdateCompositionHookUpdateCompositionHookRequest withAudioSources(String[] audioSources) {
        this.audioSources = audioSources;
        return this;
    }
    @SpeakeasyMetadata("form:name=AudioSourcesExcluded")
    public String[] audioSourcesExcluded;
    public UpdateCompositionHookUpdateCompositionHookRequest withAudioSourcesExcluded(String[] audioSourcesExcluded) {
        this.audioSourcesExcluded = audioSourcesExcluded;
        return this;
    }
    @SpeakeasyMetadata("form:name=Enabled")
    public Boolean enabled;
    public UpdateCompositionHookUpdateCompositionHookRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=Format")
    public openapisdk.models.shared.CompositionHookEnumFormatEnum format;
    public UpdateCompositionHookUpdateCompositionHookRequest withFormat(openapisdk.models.shared.CompositionHookEnumFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateCompositionHookUpdateCompositionHookRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Resolution")
    public String resolution;
    public UpdateCompositionHookUpdateCompositionHookRequest withResolution(String resolution) {
        this.resolution = resolution;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public UpdateCompositionHookUpdateCompositionHookRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum statusCallbackMethod;
    public UpdateCompositionHookUpdateCompositionHookRequest withStatusCallbackMethod(UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=Trim")
    public Boolean trim;
    public UpdateCompositionHookUpdateCompositionHookRequest withTrim(Boolean trim) {
        this.trim = trim;
        return this;
    }
    @SpeakeasyMetadata("form:name=VideoLayout")
    public Object videoLayout;
    public UpdateCompositionHookUpdateCompositionHookRequest withVideoLayout(Object videoLayout) {
        this.videoLayout = videoLayout;
        return this;
    }
}