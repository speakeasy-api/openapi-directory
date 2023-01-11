package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandFieldValueCreateUnderstandFieldValueRequest {
    @SpeakeasyMetadata("form:name=Language")
    public String language;
    public CreateUnderstandFieldValueCreateUnderstandFieldValueRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("form:name=SynonymOf")
    public String synonymOf;
    public CreateUnderstandFieldValueCreateUnderstandFieldValueRequest withSynonymOf(String synonymOf) {
        this.synonymOf = synonymOf;
        return this;
    }
    @SpeakeasyMetadata("form:name=Value")
    public String value;
    public CreateUnderstandFieldValueCreateUnderstandFieldValueRequest withValue(String value) {
        this.value = value;
        return this;
    }
}