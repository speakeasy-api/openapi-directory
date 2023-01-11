package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrgPolicy
 * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
public class OrgPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("booleanPolicy")
    public BooleanPolicy booleanPolicy;
    public OrgPolicy withBooleanPolicy(BooleanPolicy booleanPolicy) {
        this.booleanPolicy = booleanPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraint")
    public String constraint;
    public OrgPolicy withConstraint(String constraint) {
        this.constraint = constraint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public OrgPolicy withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPolicy")
    public ListPolicy listPolicy;
    public OrgPolicy withListPolicy(ListPolicy listPolicy) {
        this.listPolicy = listPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restoreDefault")
    public java.util.Map<String, Object> restoreDefault;
    public OrgPolicy withRestoreDefault(java.util.Map<String, Object> restoreDefault) {
        this.restoreDefault = restoreDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public OrgPolicy withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public OrgPolicy withVersion(Integer version) {
        this.version = version;
        return this;
    }
}