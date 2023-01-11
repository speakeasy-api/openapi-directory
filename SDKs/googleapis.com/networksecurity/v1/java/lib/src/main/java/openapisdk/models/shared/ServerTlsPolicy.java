package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServerTlsPolicy
 * ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource.
**/
public class ServerTlsPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowOpen")
    public Boolean allowOpen;
    public ServerTlsPolicy withAllowOpen(Boolean allowOpen) {
        this.allowOpen = allowOpen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public ServerTlsPolicy withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ServerTlsPolicy withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ServerTlsPolicy withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mtlsPolicy")
    public MtlsPolicy mtlsPolicy;
    public ServerTlsPolicy withMtlsPolicy(MtlsPolicy mtlsPolicy) {
        this.mtlsPolicy = mtlsPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ServerTlsPolicy withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCertificate")
    public GoogleCloudNetworksecurityV1CertificateProvider serverCertificate;
    public ServerTlsPolicy withServerCertificate(GoogleCloudNetworksecurityV1CertificateProvider serverCertificate) {
        this.serverCertificate = serverCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public ServerTlsPolicy withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}