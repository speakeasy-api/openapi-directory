package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * LandlordTenancyModel
 * Landlord Tenancy Model.
**/
public class LandlordTenancyModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ActualEndDate")
    public OffsetDateTime actualEndDate;
    public LandlordTenancyModel withActualEndDate(OffsetDateTime actualEndDate) {
        this.actualEndDate = actualEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Beds")
    public Integer beds;
    public LandlordTenancyModel withBeds(Integer beds) {
        this.beds = beds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Bond")
    public Double bond;
    public LandlordTenancyModel withBond(Double bond) {
        this.bond = bond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BranchID")
    public String branchID;
    public LandlordTenancyModel withBranchId(String branchID) {
        this.branchID = branchID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Certificates")
    public LandlordMaintenanceCertificateModel[] certificates;
    public LandlordTenancyModel withCertificates(LandlordMaintenanceCertificateModel[] certificates) {
        this.certificates = certificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Documents")
    public LettingsLandlordDocument[] documents;
    public LandlordTenancyModel withDocuments(LettingsLandlordDocument[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FixedDate")
    public OffsetDateTime fixedDate;
    public LandlordTenancyModel withFixedDate(OffsetDateTime fixedDate) {
        this.fixedDate = fixedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlobalReference")
    public String globalReference;
    public LandlordTenancyModel withGlobalReference(String globalReference) {
        this.globalReference = globalReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ID")
    public String id;
    public LandlordTenancyModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Inspections")
    public LandlordLettingsInspectionModel[] inspections;
    public LandlordTenancyModel withInspections(LandlordLettingsInspectionModel[] inspections) {
        this.inspections = inspections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ManagedRent")
    public Boolean managedRent;
    public LandlordTenancyModel withManagedRent(Boolean managedRent) {
        this.managedRent = managedRent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Preferences")
    public LandlordMaintenancePreferenceModel[] preferences;
    public LandlordTenancyModel withPreferences(LandlordMaintenancePreferenceModel[] preferences) {
        this.preferences = preferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreviousRentAmount")
    public Double previousRentAmount;
    public LandlordTenancyModel withPreviousRentAmount(Double previousRentAmount) {
        this.previousRentAmount = previousRentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PropertyAddress")
    public String propertyAddress;
    public LandlordTenancyModel withPropertyAddress(String propertyAddress) {
        this.propertyAddress = propertyAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rent")
    public String rent;
    public LandlordTenancyModel withRent(String rent) {
        this.rent = rent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RentAmount")
    public Double rentAmount;
    public LandlordTenancyModel withRentAmount(Double rentAmount) {
        this.rentAmount = rentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartDate")
    public OffsetDateTime startDate;
    public LandlordTenancyModel withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TenancyProperty")
    public String tenancyProperty;
    public LandlordTenancyModel withTenancyProperty(String tenancyProperty) {
        this.tenancyProperty = tenancyProperty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TenancyState")
    public String tenancyState;
    public LandlordTenancyModel withTenancyState(String tenancyState) {
        this.tenancyState = tenancyState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tenants")
    public String[] tenants;
    public LandlordTenancyModel withTenants(String[] tenants) {
        this.tenants = tenants;
        return this;
    }
}