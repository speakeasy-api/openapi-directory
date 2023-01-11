package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSmsCommandListSmsCommandResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSmsCommandListSmsCommandResponseMeta meta;
    public ListSmsCommandListSmsCommandResponse withMeta(ListSmsCommandListSmsCommandResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_commands")
    public openapisdk.models.shared.SupersimV1SmsCommand[] smsCommands;
    public ListSmsCommandListSmsCommandResponse withSmsCommands(openapisdk.models.shared.SupersimV1SmsCommand[] smsCommands) {
        this.smsCommands = smsCommands;
        return this;
    }
}