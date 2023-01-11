package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Indicator
 * Represents what's commonly known as an Indicator of compromise (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. Reference: https://en.wikipedia.org/wiki/Indicator_of_compromise
**/
public class Indicator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public String[] domains;
    public Indicator withDomains(String[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddresses")
    public String[] ipAddresses;
    public Indicator withIpAddresses(String[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatures")
    public ProcessSignature[] signatures;
    public Indicator withSignatures(ProcessSignature[] signatures) {
        this.signatures = signatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uris")
    public String[] uris;
    public Indicator withUris(String[] uris) {
        this.uris = uris;
        return this;
    }
}