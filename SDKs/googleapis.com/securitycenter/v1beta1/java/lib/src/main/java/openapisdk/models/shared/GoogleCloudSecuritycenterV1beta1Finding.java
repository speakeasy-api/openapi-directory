package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudSecuritycenterV1beta1Finding
 * Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding.
**/
public class GoogleCloudSecuritycenterV1beta1Finding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public GoogleCloudSecuritycenterV1beta1Finding withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudSecuritycenterV1beta1Finding withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTime")
    public String eventTime;
    public GoogleCloudSecuritycenterV1beta1Finding withEventTime(String eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalUri")
    public String externalUri;
    public GoogleCloudSecuritycenterV1beta1Finding withExternalUri(String externalUri) {
        this.externalUri = externalUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudSecuritycenterV1beta1Finding withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public GoogleCloudSecuritycenterV1beta1Finding withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public GoogleCloudSecuritycenterV1beta1Finding withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityMarks")
    public GoogleCloudSecuritycenterV1beta1SecurityMarks securityMarks;
    public GoogleCloudSecuritycenterV1beta1Finding withSecurityMarks(GoogleCloudSecuritycenterV1beta1SecurityMarks securityMarks) {
        this.securityMarks = securityMarks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceProperties")
    public java.util.Map<String, Object> sourceProperties;
    public GoogleCloudSecuritycenterV1beta1Finding withSourceProperties(java.util.Map<String, Object> sourceProperties) {
        this.sourceProperties = sourceProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GoogleCloudSecuritycenterV1beta1FindingStateEnum state;
    public GoogleCloudSecuritycenterV1beta1Finding withState(GoogleCloudSecuritycenterV1beta1FindingStateEnum state) {
        this.state = state;
        return this;
    }
}