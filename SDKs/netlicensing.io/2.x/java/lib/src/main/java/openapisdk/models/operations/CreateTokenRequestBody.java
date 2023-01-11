package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTokenRequestBody {
    @SpeakeasyMetadata("form:name=action")
    public CreateTokenRequestBodyActionEnum action;
    public CreateTokenRequestBody withAction(CreateTokenRequestBodyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("form:name=apiKeyRole")
    public CreateTokenRequestBodyApiKeyRoleEnum apiKeyRole;
    public CreateTokenRequestBody withApiKeyRole(CreateTokenRequestBodyApiKeyRoleEnum apiKeyRole) {
        this.apiKeyRole = apiKeyRole;
        return this;
    }
    @SpeakeasyMetadata("form:name=cancelURL")
    public String cancelURL;
    public CreateTokenRequestBody withCancelUrl(String cancelURL) {
        this.cancelURL = cancelURL;
        return this;
    }
    @SpeakeasyMetadata("form:name=cancelURLTitle")
    public String cancelURLTitle;
    public CreateTokenRequestBody withCancelUrlTitle(String cancelURLTitle) {
        this.cancelURLTitle = cancelURLTitle;
        return this;
    }
    @SpeakeasyMetadata("form:name=licenseTemplateNumber")
    public String licenseTemplateNumber;
    public CreateTokenRequestBody withLicenseTemplateNumber(String licenseTemplateNumber) {
        this.licenseTemplateNumber = licenseTemplateNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=licenseeNumber")
    public String licenseeNumber;
    public CreateTokenRequestBody withLicenseeNumber(String licenseeNumber) {
        this.licenseeNumber = licenseeNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=predefinedShoppingItem")
    public String predefinedShoppingItem;
    public CreateTokenRequestBody withPredefinedShoppingItem(String predefinedShoppingItem) {
        this.predefinedShoppingItem = predefinedShoppingItem;
        return this;
    }
    @SpeakeasyMetadata("form:name=privateKey")
    public String privateKey;
    public CreateTokenRequestBody withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=productNumber")
    public String productNumber;
    public CreateTokenRequestBody withProductNumber(String productNumber) {
        this.productNumber = productNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=successURL")
    public String successURL;
    public CreateTokenRequestBody withSuccessUrl(String successURL) {
        this.successURL = successURL;
        return this;
    }
    @SpeakeasyMetadata("form:name=successURLTitle")
    public String successURLTitle;
    public CreateTokenRequestBody withSuccessUrlTitle(String successURLTitle) {
        this.successURLTitle = successURLTitle;
        return this;
    }
    @SpeakeasyMetadata("form:name=tokenType")
    public CreateTokenRequestBodyTokenTypeEnum tokenType;
    public CreateTokenRequestBody withTokenType(CreateTokenRequestBodyTokenTypeEnum tokenType) {
        this.tokenType = tokenType;
        return this;
    }
    @SpeakeasyMetadata("form:name=type")
    public CreateTokenRequestBodyTypeEnum type;
    public CreateTokenRequestBody withType(CreateTokenRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}