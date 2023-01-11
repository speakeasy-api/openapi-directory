package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CaPoolInput
 * A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.
**/
public class CaPoolInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuancePolicy")
    public IssuancePolicy issuancePolicy;
    public CaPoolInput withIssuancePolicy(IssuancePolicy issuancePolicy) {
        this.issuancePolicy = issuancePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public CaPoolInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishingOptions")
    public PublishingOptions publishingOptions;
    public CaPoolInput withPublishingOptions(PublishingOptions publishingOptions) {
        this.publishingOptions = publishingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier")
    public CaPoolTierEnum tier;
    public CaPoolInput withTier(CaPoolTierEnum tier) {
        this.tier = tier;
        return this;
    }
}