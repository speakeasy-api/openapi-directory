package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFamilyDetails200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definition")
    public String definition;
    public GetFamilyDetails200ApplicationJson withDefinition(String definition) {
        this.definition = definition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetFamilyDetails200ApplicationJson withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hypernyms")
    public Double[][] hypernyms;
    public GetFamilyDetails200ApplicationJson withHypernyms(Double[][] hypernyms) {
        this.hypernyms = hypernyms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permId")
    public String permId;
    public GetFamilyDetails200ApplicationJson withPermId(String permId) {
        this.permId = permId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GetFamilyDetails200ApplicationJson withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wikidata")
    public String wikidata;
    public GetFamilyDetails200ApplicationJson withWikidata(String wikidata) {
        this.wikidata = wikidata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wordnet30")
    public String wordnet30;
    public GetFamilyDetails200ApplicationJson withWordnet30(String wordnet30) {
        this.wordnet30 = wordnet30;
        return this;
    }
}