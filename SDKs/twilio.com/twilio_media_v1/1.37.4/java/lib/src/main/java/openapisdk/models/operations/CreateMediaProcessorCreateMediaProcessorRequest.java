package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMediaProcessorCreateMediaProcessorRequest {
    @SpeakeasyMetadata("form:name=Extension")
    public String extension;
    public CreateMediaProcessorCreateMediaProcessorRequest withExtension(String extension) {
        this.extension = extension;
        return this;
    }
    @SpeakeasyMetadata("form:name=ExtensionContext")
    public String extensionContext;
    public CreateMediaProcessorCreateMediaProcessorRequest withExtensionContext(String extensionContext) {
        this.extensionContext = extensionContext;
        return this;
    }
    @SpeakeasyMetadata("form:name=ExtensionEnvironment")
    public Object extensionEnvironment;
    public CreateMediaProcessorCreateMediaProcessorRequest withExtensionEnvironment(Object extensionEnvironment) {
        this.extensionEnvironment = extensionEnvironment;
        return this;
    }
    @SpeakeasyMetadata("form:name=MaxDuration")
    public Long maxDuration;
    public CreateMediaProcessorCreateMediaProcessorRequest withMaxDuration(Long maxDuration) {
        this.maxDuration = maxDuration;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateMediaProcessorCreateMediaProcessorRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum statusCallbackMethod;
    public CreateMediaProcessorCreateMediaProcessorRequest withStatusCallbackMethod(CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
}