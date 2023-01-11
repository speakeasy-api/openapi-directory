package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutBenefitsDocumentUpload401ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public PutBenefitsDocumentUpload401ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}