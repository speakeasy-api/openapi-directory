package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SimMatch {
    @JsonProperty("id")
    public String id;
    public SimMatch withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public SimMatch withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pairwise_match")
    public PairwiseMatch[] pairwiseMatch;
    public SimMatch withPairwiseMatch(PairwiseMatch[] pairwiseMatch) {
        this.pairwiseMatch = pairwiseMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public String rank;
    public SimMatch withRank(String rank) {
        this.rank = rank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Double score;
    public SimMatch withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("significance")
    public String significance;
    public SimMatch withSignificance(String significance) {
        this.significance = significance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxon")
    public Node taxon;
    public SimMatch withTaxon(Node taxon) {
        this.taxon = taxon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SimMatch withType(String type) {
        this.type = type;
        return this;
    }
}