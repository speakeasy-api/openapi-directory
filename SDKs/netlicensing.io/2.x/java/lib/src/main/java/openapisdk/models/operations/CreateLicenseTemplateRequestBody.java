package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLicenseTemplateRequestBody {
    @SpeakeasyMetadata("form:name=active")
    public Boolean active;
    public CreateLicenseTemplateRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("form:name=automatic")
    public Boolean automatic;
    public CreateLicenseTemplateRequestBody withAutomatic(Boolean automatic) {
        this.automatic = automatic;
        return this;
    }
    @SpeakeasyMetadata("form:name=currency")
    public String currency;
    public CreateLicenseTemplateRequestBody withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @SpeakeasyMetadata("form:name=hidden")
    public Boolean hidden;
    public CreateLicenseTemplateRequestBody withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @SpeakeasyMetadata("form:name=hideLicenses")
    public Boolean hideLicenses;
    public CreateLicenseTemplateRequestBody withHideLicenses(Boolean hideLicenses) {
        this.hideLicenses = hideLicenses;
        return this;
    }
    @SpeakeasyMetadata("form:name=licenseType")
    public String licenseType;
    public CreateLicenseTemplateRequestBody withLicenseType(String licenseType) {
        this.licenseType = licenseType;
        return this;
    }
    @SpeakeasyMetadata("form:name=maxSessions")
    public String maxSessions;
    public CreateLicenseTemplateRequestBody withMaxSessions(String maxSessions) {
        this.maxSessions = maxSessions;
        return this;
    }
    @SpeakeasyMetadata("form:name=name")
    public String name;
    public CreateLicenseTemplateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public CreateLicenseTemplateRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=price")
    public Double price;
    public CreateLicenseTemplateRequestBody withPrice(Double price) {
        this.price = price;
        return this;
    }
    @SpeakeasyMetadata("form:name=productModuleNumber")
    public String productModuleNumber;
    public CreateLicenseTemplateRequestBody withProductModuleNumber(String productModuleNumber) {
        this.productModuleNumber = productModuleNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=quantity")
    public String quantity;
    public CreateLicenseTemplateRequestBody withQuantity(String quantity) {
        this.quantity = quantity;
        return this;
    }
    @SpeakeasyMetadata("form:name=quota")
    public String quota;
    public CreateLicenseTemplateRequestBody withQuota(String quota) {
        this.quota = quota;
        return this;
    }
    @SpeakeasyMetadata("form:name=timeVolume")
    public String timeVolume;
    public CreateLicenseTemplateRequestBody withTimeVolume(String timeVolume) {
        this.timeVolume = timeVolume;
        return this;
    }
    @SpeakeasyMetadata("form:name=timeVolumePeriod")
    public String timeVolumePeriod;
    public CreateLicenseTemplateRequestBody withTimeVolumePeriod(String timeVolumePeriod) {
        this.timeVolumePeriod = timeVolumePeriod;
        return this;
    }
}