package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPolicysimulatorV1ReplayResult
 * The result of replaying a single access tuple against a simulated state.
**/
public class GoogleCloudPolicysimulatorV1ReplayResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessTuple")
    public GoogleCloudPolicysimulatorV1AccessTuple accessTuple;
    public GoogleCloudPolicysimulatorV1ReplayResult withAccessTuple(GoogleCloudPolicysimulatorV1AccessTuple accessTuple) {
        this.accessTuple = accessTuple;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diff")
    public GoogleCloudPolicysimulatorV1ReplayDiff diff;
    public GoogleCloudPolicysimulatorV1ReplayResult withDiff(GoogleCloudPolicysimulatorV1ReplayDiff diff) {
        this.diff = diff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public GoogleRpcStatus error;
    public GoogleCloudPolicysimulatorV1ReplayResult withError(GoogleRpcStatus error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSeenDate")
    public GoogleTypeDate lastSeenDate;
    public GoogleCloudPolicysimulatorV1ReplayResult withLastSeenDate(GoogleTypeDate lastSeenDate) {
        this.lastSeenDate = lastSeenDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudPolicysimulatorV1ReplayResult withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public GoogleCloudPolicysimulatorV1ReplayResult withParent(String parent) {
        this.parent = parent;
        return this;
    }
}