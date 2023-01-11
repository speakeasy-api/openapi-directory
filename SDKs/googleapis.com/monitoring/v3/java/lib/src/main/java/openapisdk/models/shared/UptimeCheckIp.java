package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UptimeCheckIp
 * Contains the region, location, and list of IP addresses where checkers in the location run from.
**/
public class UptimeCheckIp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public UptimeCheckIp withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public UptimeCheckIp withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public UptimeCheckIpRegionEnum region;
    public UptimeCheckIp withRegion(UptimeCheckIpRegionEnum region) {
        this.region = region;
        return this;
    }
}