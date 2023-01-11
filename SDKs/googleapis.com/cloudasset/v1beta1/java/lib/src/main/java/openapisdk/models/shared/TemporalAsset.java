package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TemporalAsset
 * An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window.
**/
public class TemporalAsset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset")
    public Asset asset;
    public TemporalAsset withAsset(Asset asset) {
        this.asset = asset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public TemporalAsset withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("window")
    public TimeWindow window;
    public TemporalAsset withWindow(TimeWindow window) {
        this.window = window;
        return this;
    }
}