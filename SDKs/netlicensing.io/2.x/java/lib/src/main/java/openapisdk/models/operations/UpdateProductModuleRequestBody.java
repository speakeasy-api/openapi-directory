package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProductModuleRequestBody {
    @SpeakeasyMetadata("form:name=active")
    public Boolean active;
    public UpdateProductModuleRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("form:name=licenseTemplate")
    public UpdateProductModuleRequestBodyLicenseTemplateEnum[] licenseTemplate;
    public UpdateProductModuleRequestBody withLicenseTemplate(UpdateProductModuleRequestBodyLicenseTemplateEnum[] licenseTemplate) {
        this.licenseTemplate = licenseTemplate;
        return this;
    }
    @SpeakeasyMetadata("form:name=licensingModel")
    public String licensingModel;
    public UpdateProductModuleRequestBody withLicensingModel(String licensingModel) {
        this.licensingModel = licensingModel;
        return this;
    }
    @SpeakeasyMetadata("form:name=maxCheckoutValidity")
    public Integer maxCheckoutValidity;
    public UpdateProductModuleRequestBody withMaxCheckoutValidity(Integer maxCheckoutValidity) {
        this.maxCheckoutValidity = maxCheckoutValidity;
        return this;
    }
    @SpeakeasyMetadata("form:name=name")
    public String name;
    public UpdateProductModuleRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("form:name=nodeSecretMode")
    public UpdateProductModuleRequestBodyNodeSecretModeEnum[] nodeSecretMode;
    public UpdateProductModuleRequestBody withNodeSecretMode(UpdateProductModuleRequestBodyNodeSecretModeEnum[] nodeSecretMode) {
        this.nodeSecretMode = nodeSecretMode;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public UpdateProductModuleRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=redThreshold")
    public Integer redThreshold;
    public UpdateProductModuleRequestBody withRedThreshold(Integer redThreshold) {
        this.redThreshold = redThreshold;
        return this;
    }
    @SpeakeasyMetadata("form:name=yellowThreshold")
    public Integer yellowThreshold;
    public UpdateProductModuleRequestBody withYellowThreshold(Integer yellowThreshold) {
        this.yellowThreshold = yellowThreshold;
        return this;
    }
}