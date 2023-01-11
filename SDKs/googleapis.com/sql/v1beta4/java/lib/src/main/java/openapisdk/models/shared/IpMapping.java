package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IpMapping
 * Database instance IP Mapping.
**/
public class IpMapping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public IpMapping withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeToRetire")
    public String timeToRetire;
    public IpMapping withTimeToRetire(String timeToRetire) {
        this.timeToRetire = timeToRetire;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public IpMappingTypeEnum type;
    public IpMapping withType(IpMappingTypeEnum type) {
        this.type = type;
        return this;
    }
}