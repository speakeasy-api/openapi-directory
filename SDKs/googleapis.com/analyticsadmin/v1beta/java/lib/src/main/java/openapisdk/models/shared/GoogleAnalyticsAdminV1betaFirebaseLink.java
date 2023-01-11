package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaFirebaseLink
 * A link between a GA4 property and a Firebase project.
**/
public class GoogleAnalyticsAdminV1betaFirebaseLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleAnalyticsAdminV1betaFirebaseLink withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAnalyticsAdminV1betaFirebaseLink withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public String project;
    public GoogleAnalyticsAdminV1betaFirebaseLink withProject(String project) {
        this.project = project;
        return this;
    }
}