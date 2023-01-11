package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBenefitsDocumentUploadStatusReport200ApplicationJson {
    @JsonProperty("data")
    public Object[] data;
    public GetBenefitsDocumentUploadStatusReport200ApplicationJson withData(Object[] data) {
        this.data = data;
        return this;
    }
}