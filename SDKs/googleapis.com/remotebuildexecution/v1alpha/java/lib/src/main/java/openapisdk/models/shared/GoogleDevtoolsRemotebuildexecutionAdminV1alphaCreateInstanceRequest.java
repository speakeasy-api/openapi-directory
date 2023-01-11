package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest
 * The request used for `CreateInstance`.
**/
public class GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance instance;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest withInstance(GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceId")
    public String instanceId;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest withParent(String parent) {
        this.parent = parent;
        return this;
    }
}