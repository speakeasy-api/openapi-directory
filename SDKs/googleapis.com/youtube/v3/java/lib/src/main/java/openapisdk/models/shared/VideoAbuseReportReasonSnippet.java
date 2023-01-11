package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoAbuseReportReasonSnippet
 * Basic details about a video category, such as its localized title.
**/
public class VideoAbuseReportReasonSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public VideoAbuseReportReasonSnippet withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryReasons")
    public VideoAbuseReportSecondaryReason[] secondaryReasons;
    public VideoAbuseReportReasonSnippet withSecondaryReasons(VideoAbuseReportSecondaryReason[] secondaryReasons) {
        this.secondaryReasons = secondaryReasons;
        return this;
    }
}