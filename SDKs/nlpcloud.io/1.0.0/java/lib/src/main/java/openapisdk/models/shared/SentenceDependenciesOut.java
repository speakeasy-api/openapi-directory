package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SentenceDependenciesOut {
    @JsonProperty("sentence_dependencies")
    public SentenceDependencyOut[] sentenceDependencies;
    public SentenceDependenciesOut withSentenceDependencies(SentenceDependencyOut[] sentenceDependencies) {
        this.sentenceDependencies = sentenceDependencies;
        return this;
    }
}