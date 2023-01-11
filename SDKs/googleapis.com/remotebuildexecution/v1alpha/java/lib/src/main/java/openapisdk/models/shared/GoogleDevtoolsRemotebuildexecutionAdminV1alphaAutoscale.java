package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale
 * Autoscale defines the autoscaling policy of a worker pool.
**/
public class GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxSize")
    public String maxSize;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale withMaxSize(String maxSize) {
        this.maxSize = maxSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minSize")
    public String minSize;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale withMinSize(String minSize) {
        this.minSize = minSize;
        return this;
    }
}