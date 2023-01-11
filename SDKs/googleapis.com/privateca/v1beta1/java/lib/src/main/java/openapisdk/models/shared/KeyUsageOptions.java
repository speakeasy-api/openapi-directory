package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyUsageOptions
 * KeyUsage.KeyUsageOptions corresponds to the key usage values described in https://tools.ietf.org/html/rfc5280#section-4.2.1.3.
**/
public class KeyUsageOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certSign")
    public Boolean certSign;
    public KeyUsageOptions withCertSign(Boolean certSign) {
        this.certSign = certSign;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentCommitment")
    public Boolean contentCommitment;
    public KeyUsageOptions withContentCommitment(Boolean contentCommitment) {
        this.contentCommitment = contentCommitment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crlSign")
    public Boolean crlSign;
    public KeyUsageOptions withCrlSign(Boolean crlSign) {
        this.crlSign = crlSign;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataEncipherment")
    public Boolean dataEncipherment;
    public KeyUsageOptions withDataEncipherment(Boolean dataEncipherment) {
        this.dataEncipherment = dataEncipherment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("decipherOnly")
    public Boolean decipherOnly;
    public KeyUsageOptions withDecipherOnly(Boolean decipherOnly) {
        this.decipherOnly = decipherOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digitalSignature")
    public Boolean digitalSignature;
    public KeyUsageOptions withDigitalSignature(Boolean digitalSignature) {
        this.digitalSignature = digitalSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encipherOnly")
    public Boolean encipherOnly;
    public KeyUsageOptions withEncipherOnly(Boolean encipherOnly) {
        this.encipherOnly = encipherOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyAgreement")
    public Boolean keyAgreement;
    public KeyUsageOptions withKeyAgreement(Boolean keyAgreement) {
        this.keyAgreement = keyAgreement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyEncipherment")
    public Boolean keyEncipherment;
    public KeyUsageOptions withKeyEncipherment(Boolean keyEncipherment) {
        this.keyEncipherment = keyEncipherment;
        return this;
    }
}