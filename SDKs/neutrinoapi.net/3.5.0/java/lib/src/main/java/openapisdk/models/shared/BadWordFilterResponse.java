package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BadWordFilterResponse {
    @JsonProperty("badWordsList")
    public String[] badWordsList;
    public BadWordFilterResponse withBadWordsList(String[] badWordsList) {
        this.badWordsList = badWordsList;
        return this;
    }
    @JsonProperty("badWordsTotal")
    public Integer badWordsTotal;
    public BadWordFilterResponse withBadWordsTotal(Integer badWordsTotal) {
        this.badWordsTotal = badWordsTotal;
        return this;
    }
    @JsonProperty("censoredContent")
    public String censoredContent;
    public BadWordFilterResponse withCensoredContent(String censoredContent) {
        this.censoredContent = censoredContent;
        return this;
    }
    @JsonProperty("isBad")
    public Boolean isBad;
    public BadWordFilterResponse withIsBad(Boolean isBad) {
        this.isBad = isBad;
        return this;
    }
}