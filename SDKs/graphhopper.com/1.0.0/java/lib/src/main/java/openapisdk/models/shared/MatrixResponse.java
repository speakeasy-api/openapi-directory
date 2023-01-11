package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MatrixResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distances")
    public Double[][] distances;
    public MatrixResponse withDistances(Double[][] distances) {
        this.distances = distances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hints")
    public MatrixResponseHints[] hints;
    public MatrixResponse withHints(MatrixResponseHints[] hints) {
        this.hints = hints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public ResponseInfo info;
    public MatrixResponse withInfo(ResponseInfo info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("times")
    public Double[][] times;
    public MatrixResponse withTimes(Double[][] times) {
        this.times = times;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weights")
    public Double[][] weights;
    public MatrixResponse withWeights(Double[][] weights) {
        this.weights = weights;
        return this;
    }
}