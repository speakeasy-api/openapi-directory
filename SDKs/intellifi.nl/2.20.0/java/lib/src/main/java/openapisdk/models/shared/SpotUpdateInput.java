package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SpotUpdateInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antenna_report_locations")
    public SpotUpdateAntennaReportLocationsInput[] antennaReportLocations;
    public SpotUpdateInput withAntennaReportLocations(SpotUpdateAntennaReportLocationsInput[] antennaReportLocations) {
        this.antennaReportLocations = antennaReportLocations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config_request")
    public java.util.Map<String, Object> configRequest;
    public SpotUpdateInput withConfigRequest(java.util.Map<String, Object> configRequest) {
        this.configRequest = configRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geo_coords")
    public GeoCoordsInput geoCoords;
    public SpotUpdateInput withGeoCoords(GeoCoordsInput geoCoords) {
        this.geoCoords = geoCoords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_location")
    public String reportLocation;
    public SpotUpdateInput withReportLocation(String reportLocation) {
        this.reportLocation = reportLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("senses_request")
    public java.util.Map<String, Object> sensesRequest;
    public SpotUpdateInput withSensesRequest(java.util.Map<String, Object> sensesRequest) {
        this.sensesRequest = sensesRequest;
        return this;
    }
}