package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateAudioRender
 * Data required to create an audio render
**/
public class CreateAudioRender {
    @JsonProperty("filename")
    public String filename;
    public CreateAudioRender withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonProperty("preset")
    public CreateAudioRenderPresetEnum preset;
    public CreateAudioRender withPreset(CreateAudioRenderPresetEnum preset) {
        this.preset = preset;
        return this;
    }
    @JsonProperty("timeline")
    public AudioRenderTimeline timeline;
    public CreateAudioRender withTimeline(AudioRenderTimeline timeline) {
        this.timeline = timeline;
        return this;
    }
}