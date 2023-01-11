package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TexttospeechProjectsLocationsVoicesSynthesizeLongAudioPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public TexttospeechProjectsLocationsVoicesSynthesizeLongAudioPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}