package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutBenefitsDocumentUpload422ApplicationJson {
    @JsonProperty("errors")
    public Object[] errors;
    public PutBenefitsDocumentUpload422ApplicationJson withErrors(Object[] errors) {
        this.errors = errors;
        return this;
    }
}