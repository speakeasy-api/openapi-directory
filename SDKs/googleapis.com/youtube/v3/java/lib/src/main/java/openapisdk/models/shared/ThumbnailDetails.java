package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThumbnailDetails
 * Internal representation of thumbnails for a YouTube resource.
**/
public class ThumbnailDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("high")
    public Thumbnail high;
    public ThumbnailDetails withHigh(Thumbnail high) {
        this.high = high;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxres")
    public Thumbnail maxres;
    public ThumbnailDetails withMaxres(Thumbnail maxres) {
        this.maxres = maxres;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium")
    public Thumbnail medium;
    public ThumbnailDetails withMedium(Thumbnail medium) {
        this.medium = medium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standard")
    public Thumbnail standard;
    public ThumbnailDetails withStandard(Thumbnail standard) {
        this.standard = standard;
        return this;
    }
}