package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SslCert
 * SslCerts Resource
**/
public class SslCert {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cert")
    public String cert;
    public SslCert withCert(String cert) {
        this.cert = cert;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certSerialNumber")
    public String certSerialNumber;
    public SslCert withCertSerialNumber(String certSerialNumber) {
        this.certSerialNumber = certSerialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commonName")
    public String commonName;
    public SslCert withCommonName(String commonName) {
        this.commonName = commonName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public SslCert withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationTime")
    public String expirationTime;
    public SslCert withExpirationTime(String expirationTime) {
        this.expirationTime = expirationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public String instance;
    public SslCert withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SslCert withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public SslCert withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha1Fingerprint")
    public String sha1Fingerprint;
    public SslCert withSha1Fingerprint(String sha1Fingerprint) {
        this.sha1Fingerprint = sha1Fingerprint;
        return this;
    }
}