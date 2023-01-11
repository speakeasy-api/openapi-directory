package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExperimentVariations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ExperimentVariations withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ExperimentVariations withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ExperimentVariations withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Double weight;
    public ExperimentVariations withWeight(Double weight) {
        this.weight = weight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("won")
    public Boolean won;
    public ExperimentVariations withWon(Boolean won) {
        this.won = won;
        return this;
    }
}