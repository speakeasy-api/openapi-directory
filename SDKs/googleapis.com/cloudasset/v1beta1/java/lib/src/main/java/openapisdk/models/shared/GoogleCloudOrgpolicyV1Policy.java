package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudOrgpolicyV1Policy
 * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
public class GoogleCloudOrgpolicyV1Policy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("booleanPolicy")
    public GoogleCloudOrgpolicyV1BooleanPolicy booleanPolicy;
    public GoogleCloudOrgpolicyV1Policy withBooleanPolicy(GoogleCloudOrgpolicyV1BooleanPolicy booleanPolicy) {
        this.booleanPolicy = booleanPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraint")
    public String constraint;
    public GoogleCloudOrgpolicyV1Policy withConstraint(String constraint) {
        this.constraint = constraint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudOrgpolicyV1Policy withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPolicy")
    public GoogleCloudOrgpolicyV1ListPolicy listPolicy;
    public GoogleCloudOrgpolicyV1Policy withListPolicy(GoogleCloudOrgpolicyV1ListPolicy listPolicy) {
        this.listPolicy = listPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restoreDefault")
    public java.util.Map<String, Object> restoreDefault;
    public GoogleCloudOrgpolicyV1Policy withRestoreDefault(java.util.Map<String, Object> restoreDefault) {
        this.restoreDefault = restoreDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudOrgpolicyV1Policy withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public GoogleCloudOrgpolicyV1Policy withVersion(Integer version) {
        this.version = version;
        return this;
    }
}