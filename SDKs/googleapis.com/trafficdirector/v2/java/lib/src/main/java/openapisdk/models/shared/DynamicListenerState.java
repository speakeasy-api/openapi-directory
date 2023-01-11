package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DynamicListenerState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public DynamicListenerState withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listener")
    public java.util.Map<String, Object> listener;
    public DynamicListenerState withListener(java.util.Map<String, Object> listener) {
        this.listener = listener;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionInfo")
    public String versionInfo;
    public DynamicListenerState withVersionInfo(String versionInfo) {
        this.versionInfo = versionInfo;
        return this;
    }
}