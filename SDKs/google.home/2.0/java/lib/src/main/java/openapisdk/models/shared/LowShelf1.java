package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LowShelf1 {
    @JsonProperty("gain_db")
    public Integer gainDb;
    public LowShelf1 withGainDb(Integer gainDb) {
        this.gainDb = gainDb;
        return this;
    }
}