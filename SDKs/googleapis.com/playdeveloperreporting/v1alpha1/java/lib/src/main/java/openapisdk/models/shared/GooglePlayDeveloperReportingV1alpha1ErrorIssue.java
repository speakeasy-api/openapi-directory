package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePlayDeveloperReportingV1alpha1ErrorIssue
 * A group of related ErrorReports received for an app. Similar error reports are grouped together into issues with a likely identical root cause. **Please note:** this resource is currently in Alpha. There could be changes to the issue grouping that would result in similar but more recent error reports being assigned to different issues. This could also cause some issues disappearing entirely and being replaced by new ones. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
**/
public class GooglePlayDeveloperReportingV1alpha1ErrorIssue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public String cause;
    public GooglePlayDeveloperReportingV1alpha1ErrorIssue withCause(String cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public GooglePlayDeveloperReportingV1alpha1ErrorIssue withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GooglePlayDeveloperReportingV1alpha1ErrorIssue withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum type;
    public GooglePlayDeveloperReportingV1alpha1ErrorIssue withType(GooglePlayDeveloperReportingV1alpha1ErrorIssueTypeEnum type) {
        this.type = type;
        return this;
    }
}