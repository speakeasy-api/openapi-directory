package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceUpdateDeviceRequest {
    @SpeakeasyMetadata("form:name=LoggingEnabled")
    public Boolean loggingEnabled;
    public UpdateDeviceUpdateDeviceRequest withLoggingEnabled(Boolean loggingEnabled) {
        this.loggingEnabled = loggingEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=TargetApp")
    public String targetApp;
    public UpdateDeviceUpdateDeviceRequest withTargetApp(String targetApp) {
        this.targetApp = targetApp;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateDeviceUpdateDeviceRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}