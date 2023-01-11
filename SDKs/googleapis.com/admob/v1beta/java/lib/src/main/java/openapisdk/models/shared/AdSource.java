package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdSource
 * Definition of a mediation ad source.
**/
public class AdSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adSourceId")
    public String adSourceId;
    public AdSource withAdSourceId(String adSourceId) {
        this.adSourceId = adSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AdSource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public AdSource withTitle(String title) {
        this.title = title;
        return this;
    }
}