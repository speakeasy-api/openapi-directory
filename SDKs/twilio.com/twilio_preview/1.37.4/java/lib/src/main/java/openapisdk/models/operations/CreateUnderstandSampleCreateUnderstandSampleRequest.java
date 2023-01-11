package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandSampleCreateUnderstandSampleRequest {
    @SpeakeasyMetadata("form:name=Language")
    public String language;
    public CreateUnderstandSampleCreateUnderstandSampleRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("form:name=SourceChannel")
    public String sourceChannel;
    public CreateUnderstandSampleCreateUnderstandSampleRequest withSourceChannel(String sourceChannel) {
        this.sourceChannel = sourceChannel;
        return this;
    }
    @SpeakeasyMetadata("form:name=TaggedText")
    public String taggedText;
    public CreateUnderstandSampleCreateUnderstandSampleRequest withTaggedText(String taggedText) {
        this.taggedText = taggedText;
        return this;
    }
}