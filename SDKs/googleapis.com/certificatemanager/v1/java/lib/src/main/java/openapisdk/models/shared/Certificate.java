package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Certificate
 * Defines TLS certificate.
**/
public class Certificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Certificate withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Certificate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public Certificate withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Certificate withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managed")
    public ManagedCertificate managed;
    public Certificate withManaged(ManagedCertificate managed) {
        this.managed = managed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Certificate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pemCertificate")
    public String pemCertificate;
    public Certificate withPemCertificate(String pemCertificate) {
        this.pemCertificate = pemCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sanDnsnames")
    public String[] sanDnsnames;
    public Certificate withSanDnsnames(String[] sanDnsnames) {
        this.sanDnsnames = sanDnsnames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public CertificateScopeEnum scope;
    public Certificate withScope(CertificateScopeEnum scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfManaged")
    public SelfManagedCertificate selfManaged;
    public Certificate withSelfManaged(SelfManagedCertificate selfManaged) {
        this.selfManaged = selfManaged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Certificate withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}