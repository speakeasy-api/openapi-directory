package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Secret
 * A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
**/
public class Secret {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public Secret withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Secret withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Secret withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public Secret withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Secret withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Secret withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replication")
    public Replication replication;
    public Secret withReplication(Replication replication) {
        this.replication = replication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rotation")
    public Rotation rotation;
    public Secret withRotation(Rotation rotation) {
        this.rotation = rotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topics")
    public Topic[] topics;
    public Secret withTopics(Topic[] topics) {
        this.topics = topics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public String ttl;
    public Secret withTtl(String ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionAliases")
    public java.util.Map<String, String> versionAliases;
    public Secret withVersionAliases(java.util.Map<String, String> versionAliases) {
        this.versionAliases = versionAliases;
        return this;
    }
}