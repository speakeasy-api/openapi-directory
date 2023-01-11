package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * YarnApplication
 * A YARN application created by a job. Application information is a subset of org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
**/
public class YarnApplication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public YarnApplication withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progress")
    public Float progress;
    public YarnApplication withProgress(Float progress) {
        this.progress = progress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public YarnApplicationStateEnum state;
    public YarnApplication withState(YarnApplicationStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingUrl")
    public String trackingUrl;
    public YarnApplication withTrackingUrl(String trackingUrl) {
        this.trackingUrl = trackingUrl;
        return this;
    }
}