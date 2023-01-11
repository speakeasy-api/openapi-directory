package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Statistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_approach_count")
    public Long closeApproachCount;
    public Statistics withCloseApproachCount(Long closeApproachCount) {
        this.closeApproachCount = closeApproachCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_updated")
    public String lastUpdated;
    public Statistics withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nasa_jpl_url")
    public Url nasaJplUrl;
    public Statistics withNasaJplUrl(Url nasaJplUrl) {
        this.nasaJplUrl = nasaJplUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("near_earth_object_count")
    public Long nearEarthObjectCount;
    public Statistics withNearEarthObjectCount(Long nearEarthObjectCount) {
        this.nearEarthObjectCount = nearEarthObjectCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public Statistics withSource(String source) {
        this.source = source;
        return this;
    }
}