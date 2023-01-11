package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm {
    @JsonProperty("ATMID")
    public String atmid;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm withAtmid(String atmid) {
        this.atmid = atmid;
        return this;
    }
    @JsonProperty("ATMServices")
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum[] atmServices;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm withAtmServices(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum[] atmServices) {
        this.atmServices = atmServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessibilityTypes")
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum[] accessibilityTypes;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm withAccessibilityTypes(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum[] accessibilityTypes) {
        this.accessibilityTypes = accessibilityTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalATMServices")
    public String[] additionalATMServices;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm withAdditionalAtmServices(String[] additionalATMServices) {
        this.additionalATMServices = additionalATMServices;
        return this;
    }
    @JsonProperty("Address")
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress address;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm withAddress(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BranchIdentification")
    public String branchIdentification;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm withBranchIdentification(String branchIdentification) {
        this.branchIdentification = branchIdentification;
        return this;
    }
    @JsonProperty("Currency")
    public String[] currency;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm withCurrency(String[] currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("GeographicLocation")
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation geographicLocation;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm withGeographicLocation(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation geographicLocation) {
        this.geographicLocation = geographicLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationCategory")
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum locationCategory;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm withLocationCategory(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum locationCategory) {
        this.locationCategory = locationCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumValueDispensed")
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum minimumValueDispensed;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm withMinimumValueDispensed(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum minimumValueDispensed) {
        this.minimumValueDispensed = minimumValueDispensed;
        return this;
    }
    @JsonProperty("Organisation")
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation organisation;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm withOrganisation(GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation organisation) {
        this.organisation = organisation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SiteID")
    public String siteID;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm withSiteId(String siteID) {
        this.siteID = siteID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SiteName")
    public String siteName;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm withSiteName(String siteName) {
        this.siteName = siteName;
        return this;
    }
    @JsonProperty("SupportedLanguages")
    public String[] supportedLanguages;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm withSupportedLanguages(String[] supportedLanguages) {
        this.supportedLanguages = supportedLanguages;
        return this;
    }
}