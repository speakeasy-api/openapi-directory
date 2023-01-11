package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIpCommandCreateIpCommandRequest {
    @SpeakeasyMetadata("form:name=CallbackMethod")
    public CreateIpCommandCreateIpCommandRequestCallbackMethodEnum callbackMethod;
    public CreateIpCommandCreateIpCommandRequest withCallbackMethod(CreateIpCommandCreateIpCommandRequestCallbackMethodEnum callbackMethod) {
        this.callbackMethod = callbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallbackUrl")
    public String callbackUrl;
    public CreateIpCommandCreateIpCommandRequest withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=DevicePort")
    public Long devicePort;
    public CreateIpCommandCreateIpCommandRequest withDevicePort(Long devicePort) {
        this.devicePort = devicePort;
        return this;
    }
    @SpeakeasyMetadata("form:name=Payload")
    public String payload;
    public CreateIpCommandCreateIpCommandRequest withPayload(String payload) {
        this.payload = payload;
        return this;
    }
    @SpeakeasyMetadata("form:name=PayloadType")
    public openapisdk.models.shared.IpCommandEnumPayloadTypeEnum payloadType;
    public CreateIpCommandCreateIpCommandRequest withPayloadType(openapisdk.models.shared.IpCommandEnumPayloadTypeEnum payloadType) {
        this.payloadType = payloadType;
        return this;
    }
    @SpeakeasyMetadata("form:name=Sim")
    public String sim;
    public CreateIpCommandCreateIpCommandRequest withSim(String sim) {
        this.sim = sim;
        return this;
    }
}