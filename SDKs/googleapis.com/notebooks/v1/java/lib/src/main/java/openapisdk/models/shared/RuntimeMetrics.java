package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeMetrics
 * Contains runtime daemon metrics, such as OS and kernels and sessions stats.
**/
public class RuntimeMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systemMetrics")
    public java.util.Map<String, String> systemMetrics;
    public RuntimeMetrics withSystemMetrics(java.util.Map<String, String> systemMetrics) {
        this.systemMetrics = systemMetrics;
        return this;
    }
}