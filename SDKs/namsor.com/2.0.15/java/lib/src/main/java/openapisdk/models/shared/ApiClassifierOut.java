package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiClassifierOut
 * The list of classifiers and versions.
**/
public class ApiClassifierOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classifierName")
    public String classifierName;
    public ApiClassifierOut withClassifierName(String classifierName) {
        this.classifierName = classifierName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("learning")
    public Boolean learning;
    public ApiClassifierOut withLearning(Boolean learning) {
        this.learning = learning;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probabilityCalibrated")
    public Boolean probabilityCalibrated;
    public ApiClassifierOut withProbabilityCalibrated(Boolean probabilityCalibrated) {
        this.probabilityCalibrated = probabilityCalibrated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serving")
    public Boolean serving;
    public ApiClassifierOut withServing(Boolean serving) {
        this.serving = serving;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shuttingDown")
    public Boolean shuttingDown;
    public ApiClassifierOut withShuttingDown(Boolean shuttingDown) {
        this.shuttingDown = shuttingDown;
        return this;
    }
}