package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostBenefitsDocumentUpload429ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public PostBenefitsDocumentUpload429ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}