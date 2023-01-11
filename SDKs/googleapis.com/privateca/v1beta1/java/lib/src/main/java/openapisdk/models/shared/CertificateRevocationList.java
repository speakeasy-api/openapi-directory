package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateRevocationList
 * A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted.
**/
public class CertificateRevocationList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessUrl")
    public String accessUrl;
    public CertificateRevocationList withAccessUrl(String accessUrl) {
        this.accessUrl = accessUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public CertificateRevocationList withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public CertificateRevocationList withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CertificateRevocationList withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pemCrl")
    public String pemCrl;
    public CertificateRevocationList withPemCrl(String pemCrl) {
        this.pemCrl = pemCrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revokedCertificates")
    public RevokedCertificate[] revokedCertificates;
    public CertificateRevocationList withRevokedCertificates(RevokedCertificate[] revokedCertificates) {
        this.revokedCertificates = revokedCertificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequenceNumber")
    public String sequenceNumber;
    public CertificateRevocationList withSequenceNumber(String sequenceNumber) {
        this.sequenceNumber = sequenceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CertificateRevocationListStateEnum state;
    public CertificateRevocationList withState(CertificateRevocationListStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public CertificateRevocationList withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}