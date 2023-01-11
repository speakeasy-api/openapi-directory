package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScaleQuestion
 * A scale question. The user has a range of numeric values to choose from.
**/
public class ScaleQuestion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("high")
    public Integer high;
    public ScaleQuestion withHigh(Integer high) {
        this.high = high;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highLabel")
    public String highLabel;
    public ScaleQuestion withHighLabel(String highLabel) {
        this.highLabel = highLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("low")
    public Integer low;
    public ScaleQuestion withLow(Integer low) {
        this.low = low;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lowLabel")
    public String lowLabel;
    public ScaleQuestion withLowLabel(String lowLabel) {
        this.lowLabel = lowLabel;
        return this;
    }
}