package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostBenefitsDocumentUpload202ApplicationJson {
    @JsonProperty("data")
    public Object data;
    public PostBenefitsDocumentUpload202ApplicationJson withData(Object data) {
        this.data = data;
        return this;
    }
}