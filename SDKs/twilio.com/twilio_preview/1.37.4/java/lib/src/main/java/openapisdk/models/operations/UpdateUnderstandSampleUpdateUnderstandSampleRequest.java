package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandSampleUpdateUnderstandSampleRequest {
    @SpeakeasyMetadata("form:name=Language")
    public String language;
    public UpdateUnderstandSampleUpdateUnderstandSampleRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("form:name=SourceChannel")
    public String sourceChannel;
    public UpdateUnderstandSampleUpdateUnderstandSampleRequest withSourceChannel(String sourceChannel) {
        this.sourceChannel = sourceChannel;
        return this;
    }
    @SpeakeasyMetadata("form:name=TaggedText")
    public String taggedText;
    public UpdateUnderstandSampleUpdateUnderstandSampleRequest withTaggedText(String taggedText) {
        this.taggedText = taggedText;
        return this;
    }
}