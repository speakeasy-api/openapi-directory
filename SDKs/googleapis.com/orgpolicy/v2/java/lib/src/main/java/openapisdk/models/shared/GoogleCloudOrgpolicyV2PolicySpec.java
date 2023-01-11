package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudOrgpolicyV2PolicySpec
 * Defines a Cloud Organization `PolicySpec` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
public class GoogleCloudOrgpolicyV2PolicySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudOrgpolicyV2PolicySpec withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inheritFromParent")
    public Boolean inheritFromParent;
    public GoogleCloudOrgpolicyV2PolicySpec withInheritFromParent(Boolean inheritFromParent) {
        this.inheritFromParent = inheritFromParent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reset")
    public Boolean reset;
    public GoogleCloudOrgpolicyV2PolicySpec withReset(Boolean reset) {
        this.reset = reset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public GoogleCloudOrgpolicyV2PolicySpecPolicyRule[] rules;
    public GoogleCloudOrgpolicyV2PolicySpec withRules(GoogleCloudOrgpolicyV2PolicySpecPolicyRule[] rules) {
        this.rules = rules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudOrgpolicyV2PolicySpec withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}