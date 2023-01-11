package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InitiatePaymentRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public InitiatePaymentRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object oneOf;
    public InitiatePaymentRequests withOneOf(Object oneOf) {
        this.oneOf = oneOf;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.PeriodicPaymentInitiationMultipartBody periodicPaymentInitiationMultipartBody;
    public InitiatePaymentRequests withPeriodicPaymentInitiationMultipartBody(openapisdk.models.shared.PeriodicPaymentInitiationMultipartBody periodicPaymentInitiationMultipartBody) {
        this.periodicPaymentInitiationMultipartBody = periodicPaymentInitiationMultipartBody;
        return this;
    }
}