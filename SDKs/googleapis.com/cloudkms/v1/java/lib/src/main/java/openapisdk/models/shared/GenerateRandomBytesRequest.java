package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateRandomBytesRequest
 * Request message for KeyManagementService.GenerateRandomBytes.
**/
public class GenerateRandomBytesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lengthBytes")
    public Integer lengthBytes;
    public GenerateRandomBytesRequest withLengthBytes(Integer lengthBytes) {
        this.lengthBytes = lengthBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectionLevel")
    public GenerateRandomBytesRequestProtectionLevelEnum protectionLevel;
    public GenerateRandomBytesRequest withProtectionLevel(GenerateRandomBytesRequestProtectionLevelEnum protectionLevel) {
        this.protectionLevel = protectionLevel;
        return this;
    }
}