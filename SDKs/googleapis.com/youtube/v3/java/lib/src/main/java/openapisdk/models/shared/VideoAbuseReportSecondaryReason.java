package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoAbuseReportSecondaryReason {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public VideoAbuseReportSecondaryReason withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public VideoAbuseReportSecondaryReason withLabel(String label) {
        this.label = label;
        return this;
    }
}