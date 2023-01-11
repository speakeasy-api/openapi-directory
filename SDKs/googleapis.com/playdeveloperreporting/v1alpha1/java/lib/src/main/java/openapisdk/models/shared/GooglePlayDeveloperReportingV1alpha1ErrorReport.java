package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePlayDeveloperReportingV1alpha1ErrorReport
 * An error report received for an app. There reports are produced by the Android platform code when a (potentially fatal) error condition is detected. Identical reports from many users will be deduplicated and coalesced into a single ErrorReport. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
**/
public class GooglePlayDeveloperReportingV1alpha1ErrorReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue")
    public String issue;
    public GooglePlayDeveloperReportingV1alpha1ErrorReport withIssue(String issue) {
        this.issue = issue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GooglePlayDeveloperReportingV1alpha1ErrorReport withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportText")
    public String reportText;
    public GooglePlayDeveloperReportingV1alpha1ErrorReport withReportText(String reportText) {
        this.reportText = reportText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum type;
    public GooglePlayDeveloperReportingV1alpha1ErrorReport withType(GooglePlayDeveloperReportingV1alpha1ErrorReportTypeEnum type) {
        this.type = type;
        return this;
    }
}