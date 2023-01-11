package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShippingSettings
 * The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role.
**/
public class ShippingSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public ShippingSettings withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCodeGroups")
    public PostalCodeGroup[] postalCodeGroups;
    public ShippingSettings withPostalCodeGroups(PostalCodeGroup[] postalCodeGroups) {
        this.postalCodeGroups = postalCodeGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public Service[] services;
    public ShippingSettings withServices(Service[] services) {
        this.services = services;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warehouses")
    public Warehouse[] warehouses;
    public ShippingSettings withWarehouses(Warehouse[] warehouses) {
        this.warehouses = warehouses;
        return this;
    }
}