package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Sign {
    @JsonProperty("certificate")
    public String certificate;
    public Sign withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonProperty("intermediate_certs")
    public String[] intermediateCerts;
    public Sign withIntermediateCerts(String[] intermediateCerts) {
        this.intermediateCerts = intermediateCerts;
        return this;
    }
    @JsonProperty("nonce")
    public String nonce;
    public Sign withNonce(String nonce) {
        this.nonce = nonce;
        return this;
    }
    @JsonProperty("signed_data")
    public String signedData;
    public Sign withSignedData(String signedData) {
        this.signedData = signedData;
        return this;
    }
}