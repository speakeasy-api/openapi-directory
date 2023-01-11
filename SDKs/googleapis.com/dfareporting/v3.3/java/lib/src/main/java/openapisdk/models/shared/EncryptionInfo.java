package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EncryptionInfo
 * A description of how user IDs are encrypted.
**/
public class EncryptionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionEntityId")
    public String encryptionEntityId;
    public EncryptionInfo withEncryptionEntityId(String encryptionEntityId) {
        this.encryptionEntityId = encryptionEntityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionEntityType")
    public EncryptionInfoEncryptionEntityTypeEnum encryptionEntityType;
    public EncryptionInfo withEncryptionEntityType(EncryptionInfoEncryptionEntityTypeEnum encryptionEntityType) {
        this.encryptionEntityType = encryptionEntityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionSource")
    public EncryptionInfoEncryptionSourceEnum encryptionSource;
    public EncryptionInfo withEncryptionSource(EncryptionInfoEncryptionSourceEnum encryptionSource) {
        this.encryptionSource = encryptionSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EncryptionInfo withKind(String kind) {
        this.kind = kind;
        return this;
    }
}