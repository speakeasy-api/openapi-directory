package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Algorithm
 * Use `objectives` instead.
**/
public class Algorithm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objective")
    public AlgorithmObjectiveEnum objective;
    public Algorithm withObjective(AlgorithmObjectiveEnum objective) {
        this.objective = objective;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("problem_type")
    public AlgorithmProblemTypeEnum problemType;
    public Algorithm withProblemType(AlgorithmProblemTypeEnum problemType) {
        this.problemType = problemType;
        return this;
    }
}