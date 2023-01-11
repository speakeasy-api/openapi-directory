package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WirelessV1AccountUsageRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public WirelessV1AccountUsageRecord withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commands")
    public Object commands;
    public WirelessV1AccountUsageRecord withCommands(Object commands) {
        this.commands = commands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Object data;
    public WirelessV1AccountUsageRecord withData(Object data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public Object period;
    public WirelessV1AccountUsageRecord withPeriod(Object period) {
        this.period = period;
        return this;
    }
}