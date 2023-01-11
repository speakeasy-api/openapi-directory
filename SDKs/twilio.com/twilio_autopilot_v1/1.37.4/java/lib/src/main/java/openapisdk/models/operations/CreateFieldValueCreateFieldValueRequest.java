package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFieldValueCreateFieldValueRequest {
    @SpeakeasyMetadata("form:name=Language")
    public String language;
    public CreateFieldValueCreateFieldValueRequest withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("form:name=SynonymOf")
    public String synonymOf;
    public CreateFieldValueCreateFieldValueRequest withSynonymOf(String synonymOf) {
        this.synonymOf = synonymOf;
        return this;
    }
    @SpeakeasyMetadata("form:name=Value")
    public String value;
    public CreateFieldValueCreateFieldValueRequest withValue(String value) {
        this.value = value;
        return this;
    }
}