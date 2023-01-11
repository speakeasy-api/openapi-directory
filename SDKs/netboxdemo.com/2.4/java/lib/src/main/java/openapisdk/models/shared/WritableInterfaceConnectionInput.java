package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableInterfaceConnectionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_status")
    public Boolean connectionStatus;
    public WritableInterfaceConnectionInput withConnectionStatus(Boolean connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    @JsonProperty("interface_a")
    public Long interfaceA;
    public WritableInterfaceConnectionInput withInterfaceA(Long interfaceA) {
        this.interfaceA = interfaceA;
        return this;
    }
    @JsonProperty("interface_b")
    public Long interfaceB;
    public WritableInterfaceConnectionInput withInterfaceB(Long interfaceB) {
        this.interfaceB = interfaceB;
        return this;
    }
}