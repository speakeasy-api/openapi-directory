package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IssuancePolicy
 * Defines controls over all certificate issuance within a CaPool.
**/
public class IssuancePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedIssuanceModes")
    public IssuanceModes allowedIssuanceModes;
    public IssuancePolicy withAllowedIssuanceModes(IssuanceModes allowedIssuanceModes) {
        this.allowedIssuanceModes = allowedIssuanceModes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedKeyTypes")
    public AllowedKeyType[] allowedKeyTypes;
    public IssuancePolicy withAllowedKeyTypes(AllowedKeyType[] allowedKeyTypes) {
        this.allowedKeyTypes = allowedKeyTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baselineValues")
    public X509Parameters baselineValues;
    public IssuancePolicy withBaselineValues(X509Parameters baselineValues) {
        this.baselineValues = baselineValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityConstraints")
    public CertificateIdentityConstraints identityConstraints;
    public IssuancePolicy withIdentityConstraints(CertificateIdentityConstraints identityConstraints) {
        this.identityConstraints = identityConstraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumLifetime")
    public String maximumLifetime;
    public IssuancePolicy withMaximumLifetime(String maximumLifetime) {
        this.maximumLifetime = maximumLifetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passthroughExtensions")
    public CertificateExtensionConstraints passthroughExtensions;
    public IssuancePolicy withPassthroughExtensions(CertificateExtensionConstraints passthroughExtensions) {
        this.passthroughExtensions = passthroughExtensions;
        return this;
    }
}