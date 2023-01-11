package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateValidationRequestCreateValidationRequestRequest {
    @SpeakeasyMetadata("form:name=CallDelay")
    public Long callDelay;
    public CreateValidationRequestCreateValidationRequestRequest withCallDelay(Long callDelay) {
        this.callDelay = callDelay;
        return this;
    }
    @SpeakeasyMetadata("form:name=Extension")
    public String extension;
    public CreateValidationRequestCreateValidationRequestRequest withExtension(String extension) {
        this.extension = extension;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateValidationRequestCreateValidationRequestRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=PhoneNumber")
    public String phoneNumber;
    public CreateValidationRequestCreateValidationRequestRequest withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateValidationRequestCreateValidationRequestRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum statusCallbackMethod;
    public CreateValidationRequestCreateValidationRequestRequest withStatusCallbackMethod(CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
}