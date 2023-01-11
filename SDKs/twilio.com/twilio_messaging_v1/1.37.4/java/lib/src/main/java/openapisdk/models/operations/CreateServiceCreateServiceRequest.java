package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceCreateServiceRequest {
    @SpeakeasyMetadata("form:name=AreaCodeGeomatch")
    public Boolean areaCodeGeomatch;
    public CreateServiceCreateServiceRequest withAreaCodeGeomatch(Boolean areaCodeGeomatch) {
        this.areaCodeGeomatch = areaCodeGeomatch;
        return this;
    }
    @SpeakeasyMetadata("form:name=FallbackMethod")
    public CreateServiceCreateServiceRequestFallbackMethodEnum fallbackMethod;
    public CreateServiceCreateServiceRequest withFallbackMethod(CreateServiceCreateServiceRequestFallbackMethodEnum fallbackMethod) {
        this.fallbackMethod = fallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=FallbackToLongCode")
    public Boolean fallbackToLongCode;
    public CreateServiceCreateServiceRequest withFallbackToLongCode(Boolean fallbackToLongCode) {
        this.fallbackToLongCode = fallbackToLongCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=FallbackUrl")
    public String fallbackUrl;
    public CreateServiceCreateServiceRequest withFallbackUrl(String fallbackUrl) {
        this.fallbackUrl = fallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateServiceCreateServiceRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=InboundMethod")
    public CreateServiceCreateServiceRequestInboundMethodEnum inboundMethod;
    public CreateServiceCreateServiceRequest withInboundMethod(CreateServiceCreateServiceRequestInboundMethodEnum inboundMethod) {
        this.inboundMethod = inboundMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=InboundRequestUrl")
    public String inboundRequestUrl;
    public CreateServiceCreateServiceRequest withInboundRequestUrl(String inboundRequestUrl) {
        this.inboundRequestUrl = inboundRequestUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=MmsConverter")
    public Boolean mmsConverter;
    public CreateServiceCreateServiceRequest withMmsConverter(Boolean mmsConverter) {
        this.mmsConverter = mmsConverter;
        return this;
    }
    @SpeakeasyMetadata("form:name=ScanMessageContent")
    public openapisdk.models.shared.ServiceEnumScanMessageContentEnum scanMessageContent;
    public CreateServiceCreateServiceRequest withScanMessageContent(openapisdk.models.shared.ServiceEnumScanMessageContentEnum scanMessageContent) {
        this.scanMessageContent = scanMessageContent;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmartEncoding")
    public Boolean smartEncoding;
    public CreateServiceCreateServiceRequest withSmartEncoding(Boolean smartEncoding) {
        this.smartEncoding = smartEncoding;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateServiceCreateServiceRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StickySender")
    public Boolean stickySender;
    public CreateServiceCreateServiceRequest withStickySender(Boolean stickySender) {
        this.stickySender = stickySender;
        return this;
    }
    @SpeakeasyMetadata("form:name=SynchronousValidation")
    public Boolean synchronousValidation;
    public CreateServiceCreateServiceRequest withSynchronousValidation(Boolean synchronousValidation) {
        this.synchronousValidation = synchronousValidation;
        return this;
    }
    @SpeakeasyMetadata("form:name=UseInboundWebhookOnNumber")
    public Boolean useInboundWebhookOnNumber;
    public CreateServiceCreateServiceRequest withUseInboundWebhookOnNumber(Boolean useInboundWebhookOnNumber) {
        this.useInboundWebhookOnNumber = useInboundWebhookOnNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=Usecase")
    public String usecase;
    public CreateServiceCreateServiceRequest withUsecase(String usecase) {
        this.usecase = usecase;
        return this;
    }
    @SpeakeasyMetadata("form:name=ValidityPeriod")
    public Long validityPeriod;
    public CreateServiceCreateServiceRequest withValidityPeriod(Long validityPeriod) {
        this.validityPeriod = validityPeriod;
        return this;
    }
}