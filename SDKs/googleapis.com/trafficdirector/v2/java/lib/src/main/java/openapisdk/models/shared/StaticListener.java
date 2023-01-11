package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StaticListener
 * Describes a statically loaded listener.
**/
public class StaticListener {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public StaticListener withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listener")
    public java.util.Map<String, Object> listener;
    public StaticListener withListener(java.util.Map<String, Object> listener) {
        this.listener = listener;
        return this;
    }
}