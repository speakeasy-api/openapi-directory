package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLicenseTemplateRequestBody {
    @SpeakeasyMetadata("form:name=active")
    public Boolean active;
    public UpdateLicenseTemplateRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("form:name=automatic")
    public Boolean automatic;
    public UpdateLicenseTemplateRequestBody withAutomatic(Boolean automatic) {
        this.automatic = automatic;
        return this;
    }
    @SpeakeasyMetadata("form:name=currency")
    public String currency;
    public UpdateLicenseTemplateRequestBody withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @SpeakeasyMetadata("form:name=hidden")
    public Boolean hidden;
    public UpdateLicenseTemplateRequestBody withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @SpeakeasyMetadata("form:name=hideLicenses")
    public Boolean hideLicenses;
    public UpdateLicenseTemplateRequestBody withHideLicenses(Boolean hideLicenses) {
        this.hideLicenses = hideLicenses;
        return this;
    }
    @SpeakeasyMetadata("form:name=licenseType")
    public String licenseType;
    public UpdateLicenseTemplateRequestBody withLicenseType(String licenseType) {
        this.licenseType = licenseType;
        return this;
    }
    @SpeakeasyMetadata("form:name=maxSessions")
    public String maxSessions;
    public UpdateLicenseTemplateRequestBody withMaxSessions(String maxSessions) {
        this.maxSessions = maxSessions;
        return this;
    }
    @SpeakeasyMetadata("form:name=name")
    public String name;
    public UpdateLicenseTemplateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public UpdateLicenseTemplateRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=price")
    public Double price;
    public UpdateLicenseTemplateRequestBody withPrice(Double price) {
        this.price = price;
        return this;
    }
    @SpeakeasyMetadata("form:name=quantity")
    public String quantity;
    public UpdateLicenseTemplateRequestBody withQuantity(String quantity) {
        this.quantity = quantity;
        return this;
    }
    @SpeakeasyMetadata("form:name=quota")
    public String quota;
    public UpdateLicenseTemplateRequestBody withQuota(String quota) {
        this.quota = quota;
        return this;
    }
    @SpeakeasyMetadata("form:name=timeVolume")
    public String timeVolume;
    public UpdateLicenseTemplateRequestBody withTimeVolume(String timeVolume) {
        this.timeVolume = timeVolume;
        return this;
    }
    @SpeakeasyMetadata("form:name=timeVolumePeriod")
    public String timeVolumePeriod;
    public UpdateLicenseTemplateRequestBody withTimeVolumePeriod(String timeVolumePeriod) {
        this.timeVolumePeriod = timeVolumePeriod;
        return this;
    }
}