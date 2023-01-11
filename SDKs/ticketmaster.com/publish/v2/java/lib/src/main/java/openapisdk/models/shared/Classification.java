package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Classification
 * Classification
**/
public class Classification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genre")
    public Level genre;
    public Classification withGenre(Level genre) {
        this.genre = genre;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;
    public Classification withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segment")
    public Segment segment;
    public Classification withSegment(Segment segment) {
        this.segment = segment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subGenre")
    public Level subGenre;
    public Classification withSubGenre(Level subGenre) {
        this.subGenre = subGenre;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subType")
    public Level subType;
    public Classification withSubType(Level subType) {
        this.subType = subType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Level type;
    public Classification withType(Level type) {
        this.type = type;
        return this;
    }
}