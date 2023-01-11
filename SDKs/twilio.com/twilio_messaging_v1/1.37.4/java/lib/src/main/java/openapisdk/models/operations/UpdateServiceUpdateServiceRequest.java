package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceUpdateServiceRequest {
    @SpeakeasyMetadata("form:name=AreaCodeGeomatch")
    public Boolean areaCodeGeomatch;
    public UpdateServiceUpdateServiceRequest withAreaCodeGeomatch(Boolean areaCodeGeomatch) {
        this.areaCodeGeomatch = areaCodeGeomatch;
        return this;
    }
    @SpeakeasyMetadata("form:name=FallbackMethod")
    public UpdateServiceUpdateServiceRequestFallbackMethodEnum fallbackMethod;
    public UpdateServiceUpdateServiceRequest withFallbackMethod(UpdateServiceUpdateServiceRequestFallbackMethodEnum fallbackMethod) {
        this.fallbackMethod = fallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=FallbackToLongCode")
    public Boolean fallbackToLongCode;
    public UpdateServiceUpdateServiceRequest withFallbackToLongCode(Boolean fallbackToLongCode) {
        this.fallbackToLongCode = fallbackToLongCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=FallbackUrl")
    public String fallbackUrl;
    public UpdateServiceUpdateServiceRequest withFallbackUrl(String fallbackUrl) {
        this.fallbackUrl = fallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateServiceUpdateServiceRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=InboundMethod")
    public UpdateServiceUpdateServiceRequestInboundMethodEnum inboundMethod;
    public UpdateServiceUpdateServiceRequest withInboundMethod(UpdateServiceUpdateServiceRequestInboundMethodEnum inboundMethod) {
        this.inboundMethod = inboundMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=InboundRequestUrl")
    public String inboundRequestUrl;
    public UpdateServiceUpdateServiceRequest withInboundRequestUrl(String inboundRequestUrl) {
        this.inboundRequestUrl = inboundRequestUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=MmsConverter")
    public Boolean mmsConverter;
    public UpdateServiceUpdateServiceRequest withMmsConverter(Boolean mmsConverter) {
        this.mmsConverter = mmsConverter;
        return this;
    }
    @SpeakeasyMetadata("form:name=ScanMessageContent")
    public openapisdk.models.shared.ServiceEnumScanMessageContentEnum scanMessageContent;
    public UpdateServiceUpdateServiceRequest withScanMessageContent(openapisdk.models.shared.ServiceEnumScanMessageContentEnum scanMessageContent) {
        this.scanMessageContent = scanMessageContent;
        return this;
    }
    @SpeakeasyMetadata("form:name=SmartEncoding")
    public Boolean smartEncoding;
    public UpdateServiceUpdateServiceRequest withSmartEncoding(Boolean smartEncoding) {
        this.smartEncoding = smartEncoding;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public UpdateServiceUpdateServiceRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StickySender")
    public Boolean stickySender;
    public UpdateServiceUpdateServiceRequest withStickySender(Boolean stickySender) {
        this.stickySender = stickySender;
        return this;
    }
    @SpeakeasyMetadata("form:name=SynchronousValidation")
    public Boolean synchronousValidation;
    public UpdateServiceUpdateServiceRequest withSynchronousValidation(Boolean synchronousValidation) {
        this.synchronousValidation = synchronousValidation;
        return this;
    }
    @SpeakeasyMetadata("form:name=UseInboundWebhookOnNumber")
    public Boolean useInboundWebhookOnNumber;
    public UpdateServiceUpdateServiceRequest withUseInboundWebhookOnNumber(Boolean useInboundWebhookOnNumber) {
        this.useInboundWebhookOnNumber = useInboundWebhookOnNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=Usecase")
    public String usecase;
    public UpdateServiceUpdateServiceRequest withUsecase(String usecase) {
        this.usecase = usecase;
        return this;
    }
    @SpeakeasyMetadata("form:name=ValidityPeriod")
    public Long validityPeriod;
    public UpdateServiceUpdateServiceRequest withValidityPeriod(Long validityPeriod) {
        this.validityPeriod = validityPeriod;
        return this;
    }
}