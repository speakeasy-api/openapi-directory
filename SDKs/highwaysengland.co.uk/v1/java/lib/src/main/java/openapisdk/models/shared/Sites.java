package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Sites {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Active")
    public Boolean[] active;
    public Sites withActive(Boolean[] active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String[] description;
    public Sites withDescription(String[] description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String[] id;
    public Sites withId(String[] id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Lattitude")
    public Double[] lattitude;
    public Sites withLattitude(Double[] lattitude) {
        this.lattitude = lattitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Longitude")
    public Double[] longitude;
    public Sites withLongitude(Double[] longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SiteId")
    public String[] siteId;
    public Sites withSiteId(String[] siteId) {
        this.siteId = siteId;
        return this;
    }
}