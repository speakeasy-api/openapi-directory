package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListIpCommandListIpCommandResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_commands")
    public openapisdk.models.shared.SupersimV1IpCommand[] ipCommands;
    public ListIpCommandListIpCommandResponse withIpCommands(openapisdk.models.shared.SupersimV1IpCommand[] ipCommands) {
        this.ipCommands = ipCommands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListIpCommandListIpCommandResponseMeta meta;
    public ListIpCommandListIpCommandResponse withMeta(ListIpCommandListIpCommandResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}