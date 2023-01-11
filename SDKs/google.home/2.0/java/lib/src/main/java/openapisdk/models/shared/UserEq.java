package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserEq {
    @JsonProperty("high_shelf")
    public HighShelf highShelf;
    public UserEq withHighShelf(HighShelf highShelf) {
        this.highShelf = highShelf;
        return this;
    }
    @JsonProperty("low_shelf")
    public LowShelf lowShelf;
    public UserEq withLowShelf(LowShelf lowShelf) {
        this.lowShelf = lowShelf;
        return this;
    }
    @JsonProperty("max_peaking_eqs")
    public Integer maxPeakingEqs;
    public UserEq withMaxPeakingEqs(Integer maxPeakingEqs) {
        this.maxPeakingEqs = maxPeakingEqs;
        return this;
    }
    @JsonProperty("peaking_eqs")
    public String[] peakingEqs;
    public UserEq withPeakingEqs(String[] peakingEqs) {
        this.peakingEqs = peakingEqs;
        return this;
    }
}