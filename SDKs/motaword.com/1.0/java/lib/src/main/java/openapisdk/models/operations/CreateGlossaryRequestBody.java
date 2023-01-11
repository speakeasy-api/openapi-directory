package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGlossaryRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public CreateGlossaryRequestBodyGlossaries glossaries;
    public CreateGlossaryRequestBody withGlossaries(CreateGlossaryRequestBodyGlossaries glossaries) {
        this.glossaries = glossaries;
        return this;
    }
}