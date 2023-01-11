package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWordSenses200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("families")
    public ListWordSenses200ApplicationJsonFamilies[] families;
    public ListWordSenses200ApplicationJson withFamilies(ListWordSenses200ApplicationJsonFamilies[] families) {
        this.families = families;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public ListWordSenses200ApplicationJsonFeatures[] features;
    public ListWordSenses200ApplicationJson withFeatures(ListWordSenses200ApplicationJsonFeatures[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public Double frequency;
    public ListWordSenses200ApplicationJson withFrequency(Double frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isLemma")
    public Boolean isLemma;
    public ListWordSenses200ApplicationJson withIsLemma(Boolean isLemma) {
        this.isLemma = isLemma;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyMapId")
    public Double legacyMapId;
    public ListWordSenses200ApplicationJson withLegacyMapId(Double legacyMapId) {
        this.legacyMapId = legacyMapId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lemma")
    public String lemma;
    public ListWordSenses200ApplicationJson withLemma(String lemma) {
        this.lemma = lemma;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lexemeId")
    public Double lexemeId;
    public ListWordSenses200ApplicationJson withLexemeId(Double lexemeId) {
        this.lexemeId = lexemeId;
        return this;
    }
}