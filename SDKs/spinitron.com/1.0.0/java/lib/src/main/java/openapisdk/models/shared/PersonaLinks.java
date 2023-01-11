package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PersonaLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Link self;
    public PersonaLinks withSelf(Link self) {
        this.self = self;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shows")
    public Link[] shows;
    public PersonaLinks withShows(Link[] shows) {
        this.shows = shows;
        return this;
    }
}