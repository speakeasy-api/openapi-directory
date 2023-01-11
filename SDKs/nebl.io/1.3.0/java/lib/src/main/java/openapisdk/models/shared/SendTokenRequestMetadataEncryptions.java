package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendTokenRequestMetadataEncryptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public SendTokenRequestMetadataEncryptions withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SendTokenRequestMetadataEncryptions withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubkey")
    public String pubkey;
    public SendTokenRequestMetadataEncryptions withPubkey(String pubkey) {
        this.pubkey = pubkey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SendTokenRequestMetadataEncryptions withType(String type) {
        this.type = type;
        return this;
    }
}