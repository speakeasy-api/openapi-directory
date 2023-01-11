package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AsymmetricSignRequest
 * Request message for KeyManagementService.AsymmetricSign.
**/
public class AsymmetricSignRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public AsymmetricSignRequest withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataCrc32c")
    public String dataCrc32c;
    public AsymmetricSignRequest withDataCrc32c(String dataCrc32c) {
        this.dataCrc32c = dataCrc32c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digest")
    public Digest digest;
    public AsymmetricSignRequest withDigest(Digest digest) {
        this.digest = digest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digestCrc32c")
    public String digestCrc32c;
    public AsymmetricSignRequest withDigestCrc32c(String digestCrc32c) {
        this.digestCrc32c = digestCrc32c;
        return this;
    }
}