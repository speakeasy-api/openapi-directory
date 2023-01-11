package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CodeScanningGetAlert503ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public CodeScanningGetAlert503ApplicationJson withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public CodeScanningGetAlert503ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public CodeScanningGetAlert503ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}