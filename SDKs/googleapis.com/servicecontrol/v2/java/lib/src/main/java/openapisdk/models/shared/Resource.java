package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Resource
 * This message defines core attributes for a resource. A resource is an addressable (named) entity provided by the destination service. For example, a file stored on a network storage service.
**/
public class Resource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public Resource withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Resource withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteTime")
    public String deleteTime;
    public Resource withDeleteTime(String deleteTime) {
        this.deleteTime = deleteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Resource withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Resource withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Resource withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public Resource withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Resource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public String service;
    public Resource withService(String service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Resource withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public Resource withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Resource withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}