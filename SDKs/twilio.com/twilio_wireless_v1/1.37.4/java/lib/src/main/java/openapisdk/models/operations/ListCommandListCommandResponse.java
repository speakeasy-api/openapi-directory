package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCommandListCommandResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commands")
    public openapisdk.models.shared.WirelessV1Command[] commands;
    public ListCommandListCommandResponse withCommands(openapisdk.models.shared.WirelessV1Command[] commands) {
        this.commands = commands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListCommandListCommandResponseMeta meta;
    public ListCommandListCommandResponse withMeta(ListCommandListCommandResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}