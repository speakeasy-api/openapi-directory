package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OperationDnsKeyContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newValue")
    public DnsKey newValue;
    public OperationDnsKeyContext withNewValue(DnsKey newValue) {
        this.newValue = newValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oldValue")
    public DnsKey oldValue;
    public OperationDnsKeyContext withOldValue(DnsKey oldValue) {
        this.oldValue = oldValue;
        return this;
    }
}