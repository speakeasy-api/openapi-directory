package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLicenseRequestBody {
    @SpeakeasyMetadata("form:name=active")
    public Boolean active;
    public UpdateLicenseRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("form:name=currency")
    public String currency;
    public UpdateLicenseRequestBody withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @SpeakeasyMetadata("form:name=hidden")
    public Boolean hidden;
    public UpdateLicenseRequestBody withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @SpeakeasyMetadata("form:name=name")
    public String name;
    public UpdateLicenseRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public UpdateLicenseRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=parentfeature")
    public String parentfeature;
    public UpdateLicenseRequestBody withParentfeature(String parentfeature) {
        this.parentfeature = parentfeature;
        return this;
    }
    @SpeakeasyMetadata("form:name=price")
    public Double price;
    public UpdateLicenseRequestBody withPrice(Double price) {
        this.price = price;
        return this;
    }
    @SpeakeasyMetadata("form:name=quantity")
    public String quantity;
    public UpdateLicenseRequestBody withQuantity(String quantity) {
        this.quantity = quantity;
        return this;
    }
    @SpeakeasyMetadata("form:name=startDate")
    public OffsetDateTime startDate;
    public UpdateLicenseRequestBody withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("form:name=timeVolume")
    public String timeVolume;
    public UpdateLicenseRequestBody withTimeVolume(String timeVolume) {
        this.timeVolume = timeVolume;
        return this;
    }
    @SpeakeasyMetadata("form:name=timeVolumePeriod")
    public String timeVolumePeriod;
    public UpdateLicenseRequestBody withTimeVolumePeriod(String timeVolumePeriod) {
        this.timeVolumePeriod = timeVolumePeriod;
        return this;
    }
    @SpeakeasyMetadata("form:name=usedQuantity")
    public String usedQuantity;
    public UpdateLicenseRequestBody withUsedQuantity(String usedQuantity) {
        this.usedQuantity = usedQuantity;
        return this;
    }
}