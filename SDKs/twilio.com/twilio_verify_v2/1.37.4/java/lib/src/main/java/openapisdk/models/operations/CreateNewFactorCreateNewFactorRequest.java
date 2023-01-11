package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNewFactorCreateNewFactorRequest {
    @SpeakeasyMetadata("form:name=Binding.Alg")
    public String bindingAlg;
    public CreateNewFactorCreateNewFactorRequest withBindingAlg(String bindingAlg) {
        this.bindingAlg = bindingAlg;
        return this;
    }
    @SpeakeasyMetadata("form:name=Binding.PublicKey")
    public String bindingPublicKey;
    public CreateNewFactorCreateNewFactorRequest withBindingPublicKey(String bindingPublicKey) {
        this.bindingPublicKey = bindingPublicKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=Binding.Secret")
    public String bindingSecret;
    public CreateNewFactorCreateNewFactorRequest withBindingSecret(String bindingSecret) {
        this.bindingSecret = bindingSecret;
        return this;
    }
    @SpeakeasyMetadata("form:name=Config.Alg")
    public openapisdk.models.shared.NewFactorEnumTotpAlgorithmsEnum configAlg;
    public CreateNewFactorCreateNewFactorRequest withConfigAlg(openapisdk.models.shared.NewFactorEnumTotpAlgorithmsEnum configAlg) {
        this.configAlg = configAlg;
        return this;
    }
    @SpeakeasyMetadata("form:name=Config.AppId")
    public String configAppId;
    public CreateNewFactorCreateNewFactorRequest withConfigAppId(String configAppId) {
        this.configAppId = configAppId;
        return this;
    }
    @SpeakeasyMetadata("form:name=Config.CodeLength")
    public Long configCodeLength;
    public CreateNewFactorCreateNewFactorRequest withConfigCodeLength(Long configCodeLength) {
        this.configCodeLength = configCodeLength;
        return this;
    }
    @SpeakeasyMetadata("form:name=Config.NotificationPlatform")
    public openapisdk.models.shared.NewFactorEnumNotificationPlatformsEnum configNotificationPlatform;
    public CreateNewFactorCreateNewFactorRequest withConfigNotificationPlatform(openapisdk.models.shared.NewFactorEnumNotificationPlatformsEnum configNotificationPlatform) {
        this.configNotificationPlatform = configNotificationPlatform;
        return this;
    }
    @SpeakeasyMetadata("form:name=Config.NotificationToken")
    public String configNotificationToken;
    public CreateNewFactorCreateNewFactorRequest withConfigNotificationToken(String configNotificationToken) {
        this.configNotificationToken = configNotificationToken;
        return this;
    }
    @SpeakeasyMetadata("form:name=Config.SdkVersion")
    public String configSdkVersion;
    public CreateNewFactorCreateNewFactorRequest withConfigSDKVersion(String configSdkVersion) {
        this.configSdkVersion = configSdkVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=Config.Skew")
    public Long configSkew;
    public CreateNewFactorCreateNewFactorRequest withConfigSkew(Long configSkew) {
        this.configSkew = configSkew;
        return this;
    }
    @SpeakeasyMetadata("form:name=Config.TimeStep")
    public Long configTimeStep;
    public CreateNewFactorCreateNewFactorRequest withConfigTimeStep(Long configTimeStep) {
        this.configTimeStep = configTimeStep;
        return this;
    }
    @SpeakeasyMetadata("form:name=FactorType")
    public openapisdk.models.shared.NewFactorEnumFactorTypesEnum factorType;
    public CreateNewFactorCreateNewFactorRequest withFactorType(openapisdk.models.shared.NewFactorEnumFactorTypesEnum factorType) {
        this.factorType = factorType;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateNewFactorCreateNewFactorRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Metadata")
    public Object metadata;
    public CreateNewFactorCreateNewFactorRequest withMetadata(Object metadata) {
        this.metadata = metadata;
        return this;
    }
}