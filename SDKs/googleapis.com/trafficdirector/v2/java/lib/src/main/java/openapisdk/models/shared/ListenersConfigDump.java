package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListenersConfigDump
 * Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response.
**/
public class ListenersConfigDump {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicListeners")
    public DynamicListener[] dynamicListeners;
    public ListenersConfigDump withDynamicListeners(DynamicListener[] dynamicListeners) {
        this.dynamicListeners = dynamicListeners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticListeners")
    public StaticListener[] staticListeners;
    public ListenersConfigDump withStaticListeners(StaticListener[] staticListeners) {
        this.staticListeners = staticListeners;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionInfo")
    public String versionInfo;
    public ListenersConfigDump withVersionInfo(String versionInfo) {
        this.versionInfo = versionInfo;
        return this;
    }
}