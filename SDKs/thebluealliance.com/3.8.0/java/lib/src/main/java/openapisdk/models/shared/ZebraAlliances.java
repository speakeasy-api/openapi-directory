package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ZebraAlliances {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blue")
    public ZebraTeam[] blue;
    public ZebraAlliances withBlue(ZebraTeam[] blue) {
        this.blue = blue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("red")
    public ZebraTeam[] red;
    public ZebraAlliances withRed(ZebraTeam[] red) {
        this.red = red;
        return this;
    }
}