package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteInstallation200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public DeleteInstallation200ApplicationJson withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application_charge_source_id")
    public String applicationChargeSourceId;
    public DeleteInstallation200ApplicationJson withApplicationChargeSourceId(String applicationChargeSourceId) {
        this.applicationChargeSourceId = applicationChargeSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurring_application_charge_id")
    public String recurringApplicationChargeId;
    public DeleteInstallation200ApplicationJson withRecurringApplicationChargeId(String recurringApplicationChargeId) {
        this.recurringApplicationChargeId = recurringApplicationChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uninstalled_at")
    public Long uninstalledAt;
    public DeleteInstallation200ApplicationJson withUninstalledAt(Long uninstalledAt) {
        this.uninstalledAt = uninstalledAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_charge")
    public DeleteInstallation200ApplicationJsonUsageCharge usageCharge;
    public DeleteInstallation200ApplicationJson withUsageCharge(DeleteInstallation200ApplicationJsonUsageCharge usageCharge) {
        this.usageCharge = usageCharge;
        return this;
    }
}