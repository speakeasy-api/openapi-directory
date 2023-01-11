package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SpotGet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antenna_report_locations")
    public SpotGetAntennaReportLocations[] antennaReportLocations;
    public SpotGet withAntennaReportLocations(SpotGetAntennaReportLocations[] antennaReportLocations) {
        this.antennaReportLocations = antennaReportLocations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public java.util.Map<String, Object> config;
    public SpotGet withConfig(java.util.Map<String, Object> config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config_request")
    public java.util.Map<String, Object> configRequest;
    public SpotGet withConfigRequest(java.util.Map<String, Object> configRequest) {
        this.configRequest = configRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geo_coords")
    public GeoCoords geoCoords;
    public SpotGet withGeoCoords(GeoCoords geoCoords) {
        this.geoCoords = geoCoords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SpotGet withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_online")
    public Boolean isOnline;
    public SpotGet withIsOnline(Boolean isOnline) {
        this.isOnline = isOnline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_counter")
    public Long requestCounter;
    public SpotGet withRequestCounter(Long requestCounter) {
        this.requestCounter = requestCounter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("senses")
    public java.util.Map<String, Object> senses;
    public SpotGet withSenses(java.util.Map<String, Object> senses) {
        this.senses = senses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("senses_request")
    public java.util.Map<String, Object> sensesRequest;
    public SpotGet withSensesRequest(java.util.Map<String, Object> sensesRequest) {
        this.sensesRequest = sensesRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serial_number")
    public Long serialNumber;
    public SpotGet withSerialNumber(Long serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Object status;
    public SpotGet withStatus(Object status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_created")
    public String timeCreated;
    public SpotGet withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_updated")
    public String timeUpdated;
    public SpotGet withTimeUpdated(String timeUpdated) {
        this.timeUpdated = timeUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public SpotGet withUrl(String url) {
        this.url = url;
        return this;
    }
}