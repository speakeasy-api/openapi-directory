package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceRecordSet
 * A unit of data that is returned by the DNS servers.
**/
public class ResourceRecordSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ResourceRecordSet withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ResourceRecordSet withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingPolicy")
    public RrSetRoutingPolicy routingPolicy;
    public ResourceRecordSet withRoutingPolicy(RrSetRoutingPolicy routingPolicy) {
        this.routingPolicy = routingPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rrdatas")
    public String[] rrdatas;
    public ResourceRecordSet withRrdatas(String[] rrdatas) {
        this.rrdatas = rrdatas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatureRrdatas")
    public String[] signatureRrdatas;
    public ResourceRecordSet withSignatureRrdatas(String[] signatureRrdatas) {
        this.signatureRrdatas = signatureRrdatas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Integer ttl;
    public ResourceRecordSet withTtl(Integer ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ResourceRecordSet withType(String type) {
        this.type = type;
        return this;
    }
}