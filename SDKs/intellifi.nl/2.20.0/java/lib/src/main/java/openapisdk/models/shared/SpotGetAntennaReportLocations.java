package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SpotGetAntennaReportLocations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antenna_number")
    public Long antennaNumber;
    public SpotGetAntennaReportLocations withAntennaNumber(Long antennaNumber) {
        this.antennaNumber = antennaNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_location")
    public Location reportLocation;
    public SpotGetAntennaReportLocations withReportLocation(Location reportLocation) {
        this.reportLocation = reportLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_location_id")
    public String reportLocationId;
    public SpotGetAntennaReportLocations withReportLocationId(String reportLocationId) {
        this.reportLocationId = reportLocationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_location_url")
    public String reportLocationUrl;
    public SpotGetAntennaReportLocations withReportLocationUrl(String reportLocationUrl) {
        this.reportLocationUrl = reportLocationUrl;
        return this;
    }
}