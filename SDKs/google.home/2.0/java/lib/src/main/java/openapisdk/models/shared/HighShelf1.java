package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HighShelf1 {
    @JsonProperty("gain_db")
    public Integer gainDb;
    public HighShelf1 withGainDb(Integer gainDb) {
        this.gainDb = gainDb;
        return this;
    }
}