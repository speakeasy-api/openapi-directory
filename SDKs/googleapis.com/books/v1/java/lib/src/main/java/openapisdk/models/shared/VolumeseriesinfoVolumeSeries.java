package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VolumeseriesinfoVolumeSeries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue")
    public VolumeseriesinfoVolumeSeriesIssue[] issue;
    public VolumeseriesinfoVolumeSeries withIssue(VolumeseriesinfoVolumeSeriesIssue[] issue) {
        this.issue = issue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderNumber")
    public Integer orderNumber;
    public VolumeseriesinfoVolumeSeries withOrderNumber(Integer orderNumber) {
        this.orderNumber = orderNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seriesBookType")
    public String seriesBookType;
    public VolumeseriesinfoVolumeSeries withSeriesBookType(String seriesBookType) {
        this.seriesBookType = seriesBookType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seriesId")
    public String seriesId;
    public VolumeseriesinfoVolumeSeries withSeriesId(String seriesId) {
        this.seriesId = seriesId;
        return this;
    }
}