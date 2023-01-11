package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFactorUpdateFactorRequest {
    @SpeakeasyMetadata("form:name=AuthPayload")
    public String authPayload;
    public UpdateFactorUpdateFactorRequest withAuthPayload(String authPayload) {
        this.authPayload = authPayload;
        return this;
    }
    @SpeakeasyMetadata("form:name=Config.Alg")
    public openapisdk.models.shared.FactorEnumTotpAlgorithmsEnum configAlg;
    public UpdateFactorUpdateFactorRequest withConfigAlg(openapisdk.models.shared.FactorEnumTotpAlgorithmsEnum configAlg) {
        this.configAlg = configAlg;
        return this;
    }
    @SpeakeasyMetadata("form:name=Config.CodeLength")
    public Long configCodeLength;
    public UpdateFactorUpdateFactorRequest withConfigCodeLength(Long configCodeLength) {
        this.configCodeLength = configCodeLength;
        return this;
    }
    @SpeakeasyMetadata("form:name=Config.NotificationPlatform")
    public String configNotificationPlatform;
    public UpdateFactorUpdateFactorRequest withConfigNotificationPlatform(String configNotificationPlatform) {
        this.configNotificationPlatform = configNotificationPlatform;
        return this;
    }
    @SpeakeasyMetadata("form:name=Config.NotificationToken")
    public String configNotificationToken;
    public UpdateFactorUpdateFactorRequest withConfigNotificationToken(String configNotificationToken) {
        this.configNotificationToken = configNotificationToken;
        return this;
    }
    @SpeakeasyMetadata("form:name=Config.SdkVersion")
    public String configSdkVersion;
    public UpdateFactorUpdateFactorRequest withConfigSDKVersion(String configSdkVersion) {
        this.configSdkVersion = configSdkVersion;
        return this;
    }
    @SpeakeasyMetadata("form:name=Config.Skew")
    public Long configSkew;
    public UpdateFactorUpdateFactorRequest withConfigSkew(Long configSkew) {
        this.configSkew = configSkew;
        return this;
    }
    @SpeakeasyMetadata("form:name=Config.TimeStep")
    public Long configTimeStep;
    public UpdateFactorUpdateFactorRequest withConfigTimeStep(Long configTimeStep) {
        this.configTimeStep = configTimeStep;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateFactorUpdateFactorRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}