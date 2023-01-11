package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DependenciesOut {
    @JsonProperty("arcs")
    public Arc[] arcs;
    public DependenciesOut withArcs(Arc[] arcs) {
        this.arcs = arcs;
        return this;
    }
    @JsonProperty("words")
    public Word[] words;
    public DependenciesOut withWords(Word[] words) {
        this.words = words;
        return this;
    }
}