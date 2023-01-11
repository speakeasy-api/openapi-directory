package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SignBlobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyId")
    public String keyId;
    public SignBlobResponse withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signedBlob")
    public String signedBlob;
    public SignBlobResponse withSignedBlob(String signedBlob) {
        this.signedBlob = signedBlob;
        return this;
    }
}