package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InterfaceConnection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_status")
    public InterfaceConnectionConnectionStatus connectionStatus;
    public InterfaceConnection withConnectionStatus(InterfaceConnectionConnectionStatus connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interface_a")
    public NestedInterface interfaceA;
    public InterfaceConnection withInterfaceA(NestedInterface interfaceA) {
        this.interfaceA = interfaceA;
        return this;
    }
    @JsonProperty("interface_b")
    public NestedInterface interfaceB;
    public InterfaceConnection withInterfaceB(NestedInterface interfaceB) {
        this.interfaceB = interfaceB;
        return this;
    }
}