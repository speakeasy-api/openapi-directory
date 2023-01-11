package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NameMatchCandidateOut
 * The ordered list of name matching candidates
**/
public class NameMatchCandidateOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidateName")
    public String candidateName;
    public NameMatchCandidateOut withCandidateName(String candidateName) {
        this.candidateName = candidateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predScoreFamilyName")
    public Double predScoreFamilyName;
    public NameMatchCandidateOut withPredScoreFamilyName(Double predScoreFamilyName) {
        this.predScoreFamilyName = predScoreFamilyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predScoreGivenName")
    public Double predScoreGivenName;
    public NameMatchCandidateOut withPredScoreGivenName(Double predScoreGivenName) {
        this.predScoreGivenName = predScoreGivenName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probability")
    public Double probability;
    public NameMatchCandidateOut withProbability(Double probability) {
        this.probability = probability;
        return this;
    }
}