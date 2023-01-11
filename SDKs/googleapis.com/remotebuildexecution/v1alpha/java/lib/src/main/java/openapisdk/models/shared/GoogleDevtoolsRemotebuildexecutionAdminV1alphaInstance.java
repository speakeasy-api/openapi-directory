package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance
 * Instance conceptually encapsulates all Remote Build Execution resources for remote builds. An instance consists of storage and compute resources (for example, `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for running remote builds. All Remote Build Execution API calls are scoped to an instance.
**/
public class GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featurePolicy")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy featurePolicy;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance withFeaturePolicy(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy featurePolicy) {
        this.featurePolicy = featurePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loggingEnabled")
    public Boolean loggingEnabled;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance withLoggingEnabled(Boolean loggingEnabled) {
        this.loggingEnabled = loggingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum state;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance withState(GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum state) {
        this.state = state;
        return this;
    }
}