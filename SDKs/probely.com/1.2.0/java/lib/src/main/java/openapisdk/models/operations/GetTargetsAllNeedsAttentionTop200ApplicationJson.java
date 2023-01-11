package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTargetsAllNeedsAttentionTop200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highs")
    public Long highs;
    public GetTargetsAllNeedsAttentionTop200ApplicationJson withHighs(Long highs) {
        this.highs = highs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetTargetsAllNeedsAttentionTop200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lows")
    public Long lows;
    public GetTargetsAllNeedsAttentionTop200ApplicationJson withLows(Long lows) {
        this.lows = lows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediums")
    public Long mediums;
    public GetTargetsAllNeedsAttentionTop200ApplicationJson withMediums(Long mediums) {
        this.mediums = mediums;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetTargetsAllNeedsAttentionTop200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetTargetsAllNeedsAttentionTop200ApplicationJson withUrl(String url) {
        this.url = url;
        return this;
    }
}