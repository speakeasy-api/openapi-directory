package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DsRecord
 * Defines a Delegation Signer (DS) record, which is needed to enable DNSSEC for a domain. It contains a digest (hash) of a DNSKEY record that must be present in the domain's DNS zone.
**/
public class DsRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public DsRecordAlgorithmEnum algorithm;
    public DsRecord withAlgorithm(DsRecordAlgorithmEnum algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digest")
    public String digest;
    public DsRecord withDigest(String digest) {
        this.digest = digest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digestType")
    public DsRecordDigestTypeEnum digestType;
    public DsRecord withDigestType(DsRecordDigestTypeEnum digestType) {
        this.digestType = digestType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyTag")
    public Integer keyTag;
    public DsRecord withKeyTag(Integer keyTag) {
        this.keyTag = keyTag;
        return this;
    }
}