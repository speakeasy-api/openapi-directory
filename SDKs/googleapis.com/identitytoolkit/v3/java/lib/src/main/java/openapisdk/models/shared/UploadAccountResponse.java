package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UploadAccountResponse
 * Respone of uploading accounts in batch.
**/
public class UploadAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public UploadAccountResponseError[] error;
    public UploadAccountResponse withError(UploadAccountResponseError[] error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public UploadAccountResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}