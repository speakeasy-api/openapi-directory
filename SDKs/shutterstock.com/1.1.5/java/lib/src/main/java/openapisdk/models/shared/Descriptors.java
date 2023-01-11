package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Descriptors
 * Information about a descriptor
**/
public class Descriptors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("average_render_speed")
    public Double averageRenderSpeed;
    public Descriptors withAverageRenderSpeed(Double averageRenderSpeed) {
        this.averageRenderSpeed = averageRenderSpeed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bands")
    public Bands[] bands;
    public Descriptors withBands(Bands[] bands) {
        this.bands = bands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Descriptors withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instruments")
    public Instruments[] instruments;
    public Descriptors withInstruments(Instruments[] instruments) {
        this.instruments = instruments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_tempo")
    public Double maxTempo;
    public Descriptors withMaxTempo(Double maxTempo) {
        this.maxTempo = maxTempo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min_tempo")
    public Double minTempo;
    public Descriptors withMinTempo(Double minTempo) {
        this.minTempo = minTempo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Descriptors withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previews")
    public Preview[] previews;
    public Descriptors withPreviews(Preview[] previews) {
        this.previews = previews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Descriptors withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}