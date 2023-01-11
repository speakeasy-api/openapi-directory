package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGlossaryRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public UpdateGlossaryRequestBodyGlossaries glossaries;
    public UpdateGlossaryRequestBody withGlossaries(UpdateGlossaryRequestBodyGlossaries glossaries) {
        this.glossaries = glossaries;
        return this;
    }
}