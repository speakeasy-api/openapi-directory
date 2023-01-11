package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Asset
 * Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.
**/
public class Asset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canonicalName")
    public String canonicalName;
    public Asset withCanonicalName(String canonicalName) {
        this.canonicalName = canonicalName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Asset withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamPolicy")
    public IamPolicy iamPolicy;
    public Asset withIamPolicy(IamPolicy iamPolicy) {
        this.iamPolicy = iamPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Asset withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceProperties")
    public java.util.Map<String, Object> resourceProperties;
    public Asset withResourceProperties(java.util.Map<String, Object> resourceProperties) {
        this.resourceProperties = resourceProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityCenterProperties")
    public SecurityCenterProperties securityCenterProperties;
    public Asset withSecurityCenterProperties(SecurityCenterProperties securityCenterProperties) {
        this.securityCenterProperties = securityCenterProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityMarks")
    public SecurityMarks securityMarks;
    public Asset withSecurityMarks(SecurityMarks securityMarks) {
        this.securityMarks = securityMarks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Asset withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}