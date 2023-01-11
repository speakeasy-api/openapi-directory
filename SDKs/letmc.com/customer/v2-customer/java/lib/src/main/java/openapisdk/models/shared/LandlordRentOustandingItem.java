package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LandlordRentOustandingItem
 * Outstanding Rent
**/
public class LandlordRentOustandingItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtDays")
    public Integer debtDays;
    public LandlordRentOustandingItem withDebtDays(Integer debtDays) {
        this.debtDays = debtDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutstandingRent")
    public Double outstandingRent;
    public LandlordRentOustandingItem withOutstandingRent(Double outstandingRent) {
        this.outstandingRent = outstandingRent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Property")
    public String property;
    public LandlordRentOustandingItem withProperty(String property) {
        this.property = property;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tenant")
    public String tenant;
    public LandlordRentOustandingItem withTenant(String tenant) {
        this.tenant = tenant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TenantID")
    public String tenantID;
    public LandlordRentOustandingItem withTenantId(String tenantID) {
        this.tenantID = tenantID;
        return this;
    }
}