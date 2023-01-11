package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBenefitsDocumentUploadStatusReport422ApplicationJson {
    @JsonProperty("errors")
    public Object[] errors;
    public GetBenefitsDocumentUploadStatusReport422ApplicationJson withErrors(Object[] errors) {
        this.errors = errors;
        return this;
    }
}