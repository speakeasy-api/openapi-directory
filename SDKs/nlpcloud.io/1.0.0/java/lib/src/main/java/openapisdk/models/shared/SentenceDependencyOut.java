package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SentenceDependencyOut {
    @JsonProperty("dependencies")
    public DependenciesOut dependencies;
    public SentenceDependencyOut withDependencies(DependenciesOut dependencies) {
        this.dependencies = dependencies;
        return this;
    }
    @JsonProperty("sentence")
    public String sentence;
    public SentenceDependencyOut withSentence(String sentence) {
        this.sentence = sentence;
        return this;
    }
}