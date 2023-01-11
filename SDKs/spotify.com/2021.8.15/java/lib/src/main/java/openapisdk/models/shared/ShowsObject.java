package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShowsObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shows")
    public SimplifiedShowObject[] shows;
    public ShowsObject withShows(SimplifiedShowObject[] shows) {
        this.shows = shows;
        return this;
    }
}