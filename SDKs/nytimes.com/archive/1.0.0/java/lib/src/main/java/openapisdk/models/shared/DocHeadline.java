package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DocHeadline {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kicker")
    public String kicker;
    public DocHeadline withKicker(String kicker) {
        this.kicker = kicker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("main")
    public String main;
    public DocHeadline withMain(String main) {
        this.main = main;
        return this;
    }
}