package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSampleCreateSampleRequest {
    @SpeakeasyMetadata("form:name=Language")
    public String language;
    public CreateSampleCreateSampleRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("form:name=SourceChannel")
    public String sourceChannel;
    public CreateSampleCreateSampleRequest withSourceChannel(String sourceChannel) {
        this.sourceChannel = sourceChannel;
        return this;
    }
    @SpeakeasyMetadata("form:name=TaggedText")
    public String taggedText;
    public CreateSampleCreateSampleRequest withTaggedText(String taggedText) {
        this.taggedText = taggedText;
        return this;
    }
}