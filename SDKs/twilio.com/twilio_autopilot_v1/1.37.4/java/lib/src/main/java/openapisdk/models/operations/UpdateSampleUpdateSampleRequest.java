package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSampleUpdateSampleRequest {
    @SpeakeasyMetadata("form:name=Language")
    public String language;
    public UpdateSampleUpdateSampleRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("form:name=SourceChannel")
    public String sourceChannel;
    public UpdateSampleUpdateSampleRequest withSourceChannel(String sourceChannel) {
        this.sourceChannel = sourceChannel;
        return this;
    }
    @SpeakeasyMetadata("form:name=TaggedText")
    public String taggedText;
    public UpdateSampleUpdateSampleRequest withTaggedText(String taggedText) {
        this.taggedText = taggedText;
        return this;
    }
}