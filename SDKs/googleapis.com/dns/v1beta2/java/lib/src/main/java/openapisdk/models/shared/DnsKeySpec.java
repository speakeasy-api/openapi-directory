package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DnsKeySpec
 * Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey.
**/
public class DnsKeySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public DnsKeySpecAlgorithmEnum algorithm;
    public DnsKeySpec withAlgorithm(DnsKeySpecAlgorithmEnum algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyLength")
    public Long keyLength;
    public DnsKeySpec withKeyLength(Long keyLength) {
        this.keyLength = keyLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyType")
    public DnsKeySpecKeyTypeEnum keyType;
    public DnsKeySpec withKeyType(DnsKeySpecKeyTypeEnum keyType) {
        this.keyType = keyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DnsKeySpec withKind(String kind) {
        this.kind = kind;
        return this;
    }
}