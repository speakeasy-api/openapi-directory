package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OperationManagedZoneContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newValue")
    public ManagedZone newValue;
    public OperationManagedZoneContext withNewValue(ManagedZone newValue) {
        this.newValue = newValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oldValue")
    public ManagedZone oldValue;
    public OperationManagedZoneContext withOldValue(ManagedZone oldValue) {
        this.oldValue = oldValue;
        return this;
    }
}