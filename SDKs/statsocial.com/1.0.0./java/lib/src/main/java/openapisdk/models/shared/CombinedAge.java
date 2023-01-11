package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CombinedAge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("18 - 24")
    public Eighteen24 eighteen24;
    public CombinedAge withEighteen24(Eighteen24 eighteen24) {
        this.eighteen24 = eighteen24;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("25 - 34")
    public TwentyFive34 twentyFive34;
    public CombinedAge withTwentyFive34(TwentyFive34 twentyFive34) {
        this.twentyFive34 = twentyFive34;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("35 - 44")
    public ThirtyFive44 thirtyFive44;
    public CombinedAge withThirtyFive44(ThirtyFive44 thirtyFive44) {
        this.thirtyFive44 = thirtyFive44;
        return this;
    }
}