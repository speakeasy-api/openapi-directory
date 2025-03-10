/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSpots200ApplicationJSONResults1AntennaReportLocations {
    /**
     * Antenna number
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antenna_number")
    public Long antennaNumber;

    public GetSpots200ApplicationJSONResults1AntennaReportLocations withAntennaNumber(Long antennaNumber) {
        this.antennaNumber = antennaNumber;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_location")
    public org.openapis.openapi.models.shared.Location reportLocation;

    public GetSpots200ApplicationJSONResults1AntennaReportLocations withReportLocation(org.openapis.openapi.models.shared.Location reportLocation) {
        this.reportLocation = reportLocation;
        return this;
    }
    
    /**
     * Unique identifier for resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_location_id")
    public String reportLocationId;

    public GetSpots200ApplicationJSONResults1AntennaReportLocations withReportLocationId(String reportLocationId) {
        this.reportLocationId = reportLocationId;
        return this;
    }
    
    /**
     * Url to the individual resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_location_url")
    public String reportLocationUrl;

    public GetSpots200ApplicationJSONResults1AntennaReportLocations withReportLocationUrl(String reportLocationUrl) {
        this.reportLocationUrl = reportLocationUrl;
        return this;
    }
    
    public GetSpots200ApplicationJSONResults1AntennaReportLocations(){}
}
