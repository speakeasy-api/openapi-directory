package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MatrixResponseHints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public MatrixResponseHints withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalid_from_points")
    public Double[] invalidFromPoints;
    public MatrixResponseHints withInvalidFromPoints(Double[] invalidFromPoints) {
        this.invalidFromPoints = invalidFromPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalid_to_points")
    public Double[] invalidToPoints;
    public MatrixResponseHints withInvalidToPoints(Double[] invalidToPoints) {
        this.invalidToPoints = invalidToPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public MatrixResponseHints withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("point_pairs")
    public Double[][] pointPairs;
    public MatrixResponseHints withPointPairs(Double[][] pointPairs) {
        this.pointPairs = pointPairs;
        return this;
    }
}