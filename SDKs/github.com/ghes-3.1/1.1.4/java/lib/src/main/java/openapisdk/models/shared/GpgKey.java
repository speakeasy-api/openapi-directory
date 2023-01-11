package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GpgKey
 * A unique encryption key
**/
public class GpgKey {
    @JsonProperty("can_certify")
    public Boolean canCertify;
    public GpgKey withCanCertify(Boolean canCertify) {
        this.canCertify = canCertify;
        return this;
    }
    @JsonProperty("can_encrypt_comms")
    public Boolean canEncryptComms;
    public GpgKey withCanEncryptComms(Boolean canEncryptComms) {
        this.canEncryptComms = canEncryptComms;
        return this;
    }
    @JsonProperty("can_encrypt_storage")
    public Boolean canEncryptStorage;
    public GpgKey withCanEncryptStorage(Boolean canEncryptStorage) {
        this.canEncryptStorage = canEncryptStorage;
        return this;
    }
    @JsonProperty("can_sign")
    public Boolean canSign;
    public GpgKey withCanSign(Boolean canSign) {
        this.canSign = canSign;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public GpgKey withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("emails")
    public GpgKeyEmails[] emails;
    public GpgKey withEmails(GpgKeyEmails[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("expires_at")
    public OffsetDateTime expiresAt;
    public GpgKey withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GpgKey withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("key_id")
    public String keyId;
    public GpgKey withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonProperty("primary_key_id")
    public Long primaryKeyId;
    public GpgKey withPrimaryKeyId(Long primaryKeyId) {
        this.primaryKeyId = primaryKeyId;
        return this;
    }
    @JsonProperty("public_key")
    public String publicKey;
    public GpgKey withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @JsonProperty("raw_key")
    public String rawKey;
    public GpgKey withRawKey(String rawKey) {
        this.rawKey = rawKey;
        return this;
    }
    @JsonProperty("subkeys")
    public GpgKeySubkeys[] subkeys;
    public GpgKey withSubkeys(GpgKeySubkeys[] subkeys) {
        this.subkeys = subkeys;
        return this;
    }
}