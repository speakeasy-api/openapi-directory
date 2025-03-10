/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSpotById200ApplicationJSON3 {
    /**
     * You may configure this field to an object which couples individual antenna ports to locations.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antenna_report_locations")
    public GetSpotById200ApplicationJSON3AntennaReportLocations[] antennaReportLocations;

    public GetSpotById200ApplicationJSON3 withAntennaReportLocations(GetSpotById200ApplicationJSON3AntennaReportLocations[] antennaReportLocations) {
        this.antennaReportLocations = antennaReportLocations;
        return this;
    }
    
    /**
     * JSON object with possible settings. Refer to individual service documentation for a good overview.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public java.util.Map<String, Object> config;

    public GetSpotById200ApplicationJSON3 withConfig(java.util.Map<String, Object> config) {
        this.config = config;
        return this;
    }
    
    /**
     * Object containing the new configuration. This will be applied automatically when the values are valid.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config_request")
    public java.util.Map<String, Object> configRequest;

    public GetSpotById200ApplicationJSON3 withConfigRequest(java.util.Map<String, Object> configRequest) {
        this.configRequest = configRequest;
        return this;
    }
    
    /**
     * Last known geolocation estimate of this object. Not guaranteed to be included in response.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geo_coords")
    public org.openapis.openapi.models.shared.GeoCoords geoCoords;

    public GetSpotById200ApplicationJSON3 withGeoCoords(org.openapis.openapi.models.shared.GeoCoords geoCoords) {
        this.geoCoords = geoCoords;
        return this;
    }
    
    /**
     * Unique identifier for resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public GetSpotById200ApplicationJSON3 withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * Whether or not this resource is actively connected to the Brain.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_online")
    public Boolean isOnline;

    public GetSpotById200ApplicationJSON3 withIsOnline(Boolean isOnline) {
        this.isOnline = isOnline;
        return this;
    }
    
    /**
     * Url to the individual resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_location_url")
    public String reportLocationUrl;

    public GetSpotById200ApplicationJSON3 withReportLocationUrl(String reportLocationUrl) {
        this.reportLocationUrl = reportLocationUrl;
        return this;
    }
    
    /**
     * The total number of HTTP requests that this resource has done.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_counter")
    public Long requestCounter;

    public GetSpotById200ApplicationJSON3 withRequestCounter(Long requestCounter) {
        this.requestCounter = requestCounter;
        return this;
    }
    
    /**
     * Senses are values that in most cases are generated inside the spot (number of presences, spot booted etc.). We also have a few senses that can be controlled by the brain. See [Sense &amp; Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("senses")
    public java.util.Map<String, Object> senses;

    public GetSpotById200ApplicationJSON3 withSenses(java.util.Map<String, Object> senses) {
        this.senses = senses;
        return this;
    }
    
    /**
     * Object containing the new senses configuration. See [Sense &amp; Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("senses_request")
    public java.util.Map<String, Object> sensesRequest;

    public GetSpotById200ApplicationJSON3 withSensesRequest(java.util.Map<String, Object> sensesRequest) {
        this.sensesRequest = sensesRequest;
        return this;
    }
    
    /**
     * This is the fixed and unique spot number. It's assigned during the production process and used to identify an individual device during its lifetime.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serial_number")
    public Long serialNumber;

    public GetSpotById200ApplicationJSON3 withSerialNumber(Long serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    
    /**
     * An object with specific information about the spot, directly send by the spot itself when the connection is created.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Object status;

    public GetSpotById200ApplicationJSON3 withStatus(Object status) {
        this.status = status;
        return this;
    }
    
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_created")
    public String timeCreated;

    public GetSpotById200ApplicationJSON3 withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_updated")
    public String timeUpdated;

    public GetSpotById200ApplicationJSON3 withTimeUpdated(String timeUpdated) {
        this.timeUpdated = timeUpdated;
        return this;
    }
    
    /**
     * Url to the individual resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;

    public GetSpotById200ApplicationJSON3 withUrl(String url) {
        this.url = url;
        return this;
    }
    
    public GetSpotById200ApplicationJSON3(){}
}
