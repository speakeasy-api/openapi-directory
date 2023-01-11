package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch {
    @JsonProperty("ATMAtBranch")
    public Boolean atmAtBranch;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withAtmAtBranch(Boolean atmAtBranch) {
        this.atmAtBranch = atmAtBranch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessibilityTypes")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum accessibilityTypes;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withAccessibilityTypes(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum accessibilityTypes) {
        this.accessibilityTypes = accessibilityTypes;
        return this;
    }
    @JsonProperty("Address")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress address;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withAddress(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlternatePhone")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone[] alternatePhone;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withAlternatePhone(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone[] alternatePhone) {
        this.alternatePhone = alternatePhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ArrivalTime")
    public String arrivalTime;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BranchDescription")
    public String branchDescription;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withBranchDescription(String branchDescription) {
        this.branchDescription = branchDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BranchFacilitiesName")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum[] branchFacilitiesName;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withBranchFacilitiesName(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum[] branchFacilitiesName) {
        this.branchFacilitiesName = branchFacilitiesName;
        return this;
    }
    @JsonProperty("BranchIdentification")
    public String branchIdentification;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withBranchIdentification(String branchIdentification) {
        this.branchIdentification = branchIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BranchMediatedServiceName")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum[] branchMediatedServiceName;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withBranchMediatedServiceName(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum[] branchMediatedServiceName) {
        this.branchMediatedServiceName = branchMediatedServiceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BranchName")
    public String branchName;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BranchOtherFacilities")
    public String[] branchOtherFacilities;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withBranchOtherFacilities(String[] branchOtherFacilities) {
        this.branchOtherFacilities = branchOtherFacilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BranchOtherMediatedServices")
    public String[] branchOtherMediatedServices;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withBranchOtherMediatedServices(String[] branchOtherMediatedServices) {
        this.branchOtherMediatedServices = branchOtherMediatedServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BranchOtherSelfServices")
    public String[] branchOtherSelfServices;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withBranchOtherSelfServices(String[] branchOtherSelfServices) {
        this.branchOtherSelfServices = branchOtherSelfServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BranchPhoto")
    public String branchPhoto;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withBranchPhoto(String branchPhoto) {
        this.branchPhoto = branchPhoto;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BranchSelfServeServiceName")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum[] branchSelfServeServiceName;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withBranchSelfServeServiceName(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum[] branchSelfServeServiceName) {
        this.branchSelfServeServiceName = branchSelfServeServiceName;
        return this;
    }
    @JsonProperty("BranchType")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchTypeEnum branchType;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withBranchType(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchTypeEnum branchType) {
        this.branchType = branchType;
        return this;
    }
    @JsonProperty("CustomerSegment")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum[] customerSegment;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withCustomerSegment(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum[] customerSegment) {
        this.customerSegment = customerSegment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DaysOfTheWeek")
    public String daysOfTheWeek;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withDaysOfTheWeek(String daysOfTheWeek) {
        this.daysOfTheWeek = daysOfTheWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DepartureTime")
    public String departureTime;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withDepartureTime(String departureTime) {
        this.departureTime = departureTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaxNumber")
    public String[] faxNumber;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withFaxNumber(String[] faxNumber) {
        this.faxNumber = faxNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GeographicLocation")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation geographicLocation;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withGeographicLocation(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation geographicLocation) {
        this.geographicLocation = geographicLocation;
        return this;
    }
    @JsonProperty("OpeningTimes")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes[] openingTimes;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withOpeningTimes(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes[] openingTimes) {
        this.openingTimes = openingTimes;
        return this;
    }
    @JsonProperty("Organisation")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation organisation;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withOrganisation(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation organisation) {
        this.organisation = organisation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParkingLocation")
    public String parkingLocation;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withParkingLocation(String parkingLocation) {
        this.parkingLocation = parkingLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlannedBranchClosure")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure[] plannedBranchClosure;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withPlannedBranchClosure(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure[] plannedBranchClosure) {
        this.plannedBranchClosure = plannedBranchClosure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StopName")
    public String stopName;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withStopName(String stopName) {
        this.stopName = stopName;
        return this;
    }
    @JsonProperty("TelephoneNumber")
    public String telephoneNumber;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch withTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
        return this;
    }
}