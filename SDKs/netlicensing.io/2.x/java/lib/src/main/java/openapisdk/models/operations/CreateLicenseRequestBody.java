package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class CreateLicenseRequestBody {
    @SpeakeasyMetadata("form:name=active")
    public Boolean active;
    public CreateLicenseRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("form:name=currency")
    public String currency;
    public CreateLicenseRequestBody withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @SpeakeasyMetadata("form:name=hidden")
    public Boolean hidden;
    public CreateLicenseRequestBody withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @SpeakeasyMetadata("form:name=licenseTemplateNumber")
    public String licenseTemplateNumber;
    public CreateLicenseRequestBody withLicenseTemplateNumber(String licenseTemplateNumber) {
        this.licenseTemplateNumber = licenseTemplateNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=licenseeNumber")
    public String licenseeNumber;
    public CreateLicenseRequestBody withLicenseeNumber(String licenseeNumber) {
        this.licenseeNumber = licenseeNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=name")
    public String name;
    public CreateLicenseRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public CreateLicenseRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=parentfeature")
    public String parentfeature;
    public CreateLicenseRequestBody withParentfeature(String parentfeature) {
        this.parentfeature = parentfeature;
        return this;
    }
    @SpeakeasyMetadata("form:name=price")
    public Double price;
    public CreateLicenseRequestBody withPrice(Double price) {
        this.price = price;
        return this;
    }
    @SpeakeasyMetadata("form:name=quantity")
    public String quantity;
    public CreateLicenseRequestBody withQuantity(String quantity) {
        this.quantity = quantity;
        return this;
    }
    @SpeakeasyMetadata("form:name=startDate")
    public OffsetDateTime startDate;
    public CreateLicenseRequestBody withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("form:name=timeVolume")
    public String timeVolume;
    public CreateLicenseRequestBody withTimeVolume(String timeVolume) {
        this.timeVolume = timeVolume;
        return this;
    }
    @SpeakeasyMetadata("form:name=timeVolumePeriod")
    public String timeVolumePeriod;
    public CreateLicenseRequestBody withTimeVolumePeriod(String timeVolumePeriod) {
        this.timeVolumePeriod = timeVolumePeriod;
        return this;
    }
    @SpeakeasyMetadata("form:name=usedQuantity")
    public String usedQuantity;
    public CreateLicenseRequestBody withUsedQuantity(String usedQuantity) {
        this.usedQuantity = usedQuantity;
        return this;
    }
}