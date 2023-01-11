package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VolumeseriesinfoVolumeSeriesIssue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueDisplayNumber")
    public String issueDisplayNumber;
    public VolumeseriesinfoVolumeSeriesIssue withIssueDisplayNumber(String issueDisplayNumber) {
        this.issueDisplayNumber = issueDisplayNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueOrderNumber")
    public Integer issueOrderNumber;
    public VolumeseriesinfoVolumeSeriesIssue withIssueOrderNumber(Integer issueOrderNumber) {
        this.issueOrderNumber = issueOrderNumber;
        return this;
    }
}