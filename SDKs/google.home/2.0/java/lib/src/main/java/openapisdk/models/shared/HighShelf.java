package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HighShelf {
    @JsonProperty("frequency")
    public Integer frequency;
    public HighShelf withFrequency(Integer frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonProperty("gain_db")
    public Integer gainDb;
    public HighShelf withGainDb(Integer gainDb) {
        this.gainDb = gainDb;
        return this;
    }
    @JsonProperty("quality")
    public Double quality;
    public HighShelf withQuality(Double quality) {
        this.quality = quality;
        return this;
    }
}