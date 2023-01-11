package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubjectAltNames
 * SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the "common name" in the distinguished name).
**/
public class SubjectAltNames {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customSans")
    public X509Extension[] customSans;
    public SubjectAltNames withCustomSans(X509Extension[] customSans) {
        this.customSans = customSans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsNames")
    public String[] dnsNames;
    public SubjectAltNames withDnsNames(String[] dnsNames) {
        this.dnsNames = dnsNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddresses")
    public String[] emailAddresses;
    public SubjectAltNames withEmailAddresses(String[] emailAddresses) {
        this.emailAddresses = emailAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddresses")
    public String[] ipAddresses;
    public SubjectAltNames withIpAddresses(String[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uris")
    public String[] uris;
    public SubjectAltNames withUris(String[] uris) {
        this.uris = uris;
        return this;
    }
}