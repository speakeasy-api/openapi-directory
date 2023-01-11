package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MpegCommonEncryption
 * Configuration for MPEG Common Encryption (MPEG-CENC).
**/
public class MpegCommonEncryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyId")
    public String keyId;
    public MpegCommonEncryption withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheme")
    public String scheme;
    public MpegCommonEncryption withScheme(String scheme) {
        this.scheme = scheme;
        return this;
    }
}