package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostBenefitsDocumentUpload422ApplicationJson {
    @JsonProperty("errors")
    public Object[] errors;
    public PostBenefitsDocumentUpload422ApplicationJson withErrors(Object[] errors) {
        this.errors = errors;
        return this;
    }
}