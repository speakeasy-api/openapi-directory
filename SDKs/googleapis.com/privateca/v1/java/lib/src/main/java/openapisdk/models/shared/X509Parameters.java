package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * X509Parameters
 * An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
**/
public class X509Parameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalExtensions")
    public X509Extension[] additionalExtensions;
    public X509Parameters withAdditionalExtensions(X509Extension[] additionalExtensions) {
        this.additionalExtensions = additionalExtensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aiaOcspServers")
    public String[] aiaOcspServers;
    public X509Parameters withAiaOcspServers(String[] aiaOcspServers) {
        this.aiaOcspServers = aiaOcspServers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caOptions")
    public CaOptions caOptions;
    public X509Parameters withCaOptions(CaOptions caOptions) {
        this.caOptions = caOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyUsage")
    public KeyUsage keyUsage;
    public X509Parameters withKeyUsage(KeyUsage keyUsage) {
        this.keyUsage = keyUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyIds")
    public ObjectId[] policyIds;
    public X509Parameters withPolicyIds(ObjectId[] policyIds) {
        this.policyIds = policyIds;
        return this;
    }
}