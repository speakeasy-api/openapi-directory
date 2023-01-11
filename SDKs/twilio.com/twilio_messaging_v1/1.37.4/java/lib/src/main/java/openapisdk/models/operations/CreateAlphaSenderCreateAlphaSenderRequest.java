package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAlphaSenderCreateAlphaSenderRequest {
    @SpeakeasyMetadata("form:name=AlphaSender")
    public String alphaSender;
    public CreateAlphaSenderCreateAlphaSenderRequest withAlphaSender(String alphaSender) {
        this.alphaSender = alphaSender;
        return this;
    }
}