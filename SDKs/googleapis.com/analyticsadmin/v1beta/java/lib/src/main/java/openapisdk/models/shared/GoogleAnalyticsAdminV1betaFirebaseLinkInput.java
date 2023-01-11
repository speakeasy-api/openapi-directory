package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaFirebaseLinkInput
 * A link between a GA4 property and a Firebase project.
**/
public class GoogleAnalyticsAdminV1betaFirebaseLinkInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public String project;
    public GoogleAnalyticsAdminV1betaFirebaseLinkInput withProject(String project) {
        this.project = project;
        return this;
    }
}