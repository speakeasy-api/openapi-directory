package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProductModuleRequestBody {
    @SpeakeasyMetadata("form:name=active")
    public Boolean active;
    public CreateProductModuleRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("form:name=licenseTemplate")
    public CreateProductModuleRequestBodyLicenseTemplateEnum[] licenseTemplate;
    public CreateProductModuleRequestBody withLicenseTemplate(CreateProductModuleRequestBodyLicenseTemplateEnum[] licenseTemplate) {
        this.licenseTemplate = licenseTemplate;
        return this;
    }
    @SpeakeasyMetadata("form:name=licensingModel")
    public String licensingModel;
    public CreateProductModuleRequestBody withLicensingModel(String licensingModel) {
        this.licensingModel = licensingModel;
        return this;
    }
    @SpeakeasyMetadata("form:name=maxCheckoutValidity")
    public Integer maxCheckoutValidity;
    public CreateProductModuleRequestBody withMaxCheckoutValidity(Integer maxCheckoutValidity) {
        this.maxCheckoutValidity = maxCheckoutValidity;
        return this;
    }
    @SpeakeasyMetadata("form:name=name")
    public String name;
    public CreateProductModuleRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("form:name=nodeSecretMode")
    public CreateProductModuleRequestBodyNodeSecretModeEnum[] nodeSecretMode;
    public CreateProductModuleRequestBody withNodeSecretMode(CreateProductModuleRequestBodyNodeSecretModeEnum[] nodeSecretMode) {
        this.nodeSecretMode = nodeSecretMode;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public CreateProductModuleRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=productNumber")
    public String productNumber;
    public CreateProductModuleRequestBody withProductNumber(String productNumber) {
        this.productNumber = productNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=redThreshold")
    public Integer redThreshold;
    public CreateProductModuleRequestBody withRedThreshold(Integer redThreshold) {
        this.redThreshold = redThreshold;
        return this;
    }
    @SpeakeasyMetadata("form:name=yellowThreshold")
    public Integer yellowThreshold;
    public CreateProductModuleRequestBody withYellowThreshold(Integer yellowThreshold) {
        this.yellowThreshold = yellowThreshold;
        return this;
    }
}