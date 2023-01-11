package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWirelessCommandListWirelessCommandResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commands")
    public openapisdk.models.shared.PreviewWirelessCommand[] commands;
    public ListWirelessCommandListWirelessCommandResponse withCommands(openapisdk.models.shared.PreviewWirelessCommand[] commands) {
        this.commands = commands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListWirelessCommandListWirelessCommandResponseMeta meta;
    public ListWirelessCommandListWirelessCommandResponse withMeta(ListWirelessCommandListWirelessCommandResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}