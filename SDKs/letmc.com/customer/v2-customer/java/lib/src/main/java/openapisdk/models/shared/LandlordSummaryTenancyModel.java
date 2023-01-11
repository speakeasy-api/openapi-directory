package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LandlordSummaryTenancyModel
 * Landlord Summary - Landing Page.
**/
public class LandlordSummaryTenancyModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Bond")
    public Double bond;
    public LandlordSummaryTenancyModel withBond(Double bond) {
        this.bond = bond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BranchID")
    public String branchID;
    public LandlordSummaryTenancyModel withBranchId(String branchID) {
        this.branchID = branchID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public LandlordSummaryTenancyModel withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlobalReference")
    public String globalReference;
    public LandlordSummaryTenancyModel withGlobalReference(String globalReference) {
        this.globalReference = globalReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ID")
    public String id;
    public LandlordSummaryTenancyModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaintenanceJobs")
    public Integer maintenanceJobs;
    public LandlordSummaryTenancyModel withMaintenanceJobs(Integer maintenanceJobs) {
        this.maintenanceJobs = maintenanceJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ManagedRent")
    public Boolean managedRent;
    public LandlordSummaryTenancyModel withManagedRent(Boolean managedRent) {
        this.managedRent = managedRent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PropertyAddress")
    public String propertyAddress;
    public LandlordSummaryTenancyModel withPropertyAddress(String propertyAddress) {
        this.propertyAddress = propertyAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rent")
    public String rent;
    public LandlordSummaryTenancyModel withRent(String rent) {
        this.rent = rent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RentArrears")
    public Double rentArrears;
    public LandlordSummaryTenancyModel withRentArrears(Double rentArrears) {
        this.rentArrears = rentArrears;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RentCollected")
    public Double rentCollected;
    public LandlordSummaryTenancyModel withRentCollected(Double rentCollected) {
        this.rentCollected = rentCollected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TenancyProperty")
    public String tenancyProperty;
    public LandlordSummaryTenancyModel withTenancyProperty(String tenancyProperty) {
        this.tenancyProperty = tenancyProperty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TenancyState")
    public String tenancyState;
    public LandlordSummaryTenancyModel withTenancyState(String tenancyState) {
        this.tenancyState = tenancyState;
        return this;
    }
}