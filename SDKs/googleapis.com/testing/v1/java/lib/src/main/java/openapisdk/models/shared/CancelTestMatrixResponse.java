package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CancelTestMatrixResponse
 * Response containing the current state of the specified test matrix.
**/
public class CancelTestMatrixResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testState")
    public CancelTestMatrixResponseTestStateEnum testState;
    public CancelTestMatrixResponse withTestState(CancelTestMatrixResponseTestStateEnum testState) {
        this.testState = testState;
        return this;
    }
}