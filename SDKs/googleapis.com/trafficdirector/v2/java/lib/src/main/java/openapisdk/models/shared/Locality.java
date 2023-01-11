package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Locality
 * Identifies location of where either Envoy runs or where upstream hosts run.
**/
public class Locality {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public Locality withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subZone")
    public String subZone;
    public Locality withSubZone(String subZone) {
        this.subZone = subZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public Locality withZone(String zone) {
        this.zone = zone;
        return this;
    }
}