package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DnsKey
 * A DNSSEC key pair.
**/
public class DnsKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public DnsKeyAlgorithmEnum algorithm;
    public DnsKey withAlgorithm(DnsKeyAlgorithmEnum algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public String creationTime;
    public DnsKey withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DnsKey withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digests")
    public DnsKeyDigest[] digests;
    public DnsKey withDigests(DnsKeyDigest[] digests) {
        this.digests = digests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DnsKey withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isActive")
    public Boolean isActive;
    public DnsKey withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyLength")
    public Long keyLength;
    public DnsKey withKeyLength(Long keyLength) {
        this.keyLength = keyLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyTag")
    public Integer keyTag;
    public DnsKey withKeyTag(Integer keyTag) {
        this.keyTag = keyTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DnsKey withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKey")
    public String publicKey;
    public DnsKey withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DnsKeyTypeEnum type;
    public DnsKey withType(DnsKeyTypeEnum type) {
        this.type = type;
        return this;
    }
}