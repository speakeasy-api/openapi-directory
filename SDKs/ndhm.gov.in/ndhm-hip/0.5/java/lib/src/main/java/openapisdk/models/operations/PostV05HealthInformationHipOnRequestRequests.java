package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05HealthInformationHipOnRequestRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05HealthInformationHipOnRequestRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HipHealthInformationRequestAcknowledgement hipHealthInformationRequestAcknowledgement;
    public PostV05HealthInformationHipOnRequestRequests withHipHealthInformationRequestAcknowledgement(openapisdk.models.shared.HipHealthInformationRequestAcknowledgement hipHealthInformationRequestAcknowledgement) {
        this.hipHealthInformationRequestAcknowledgement = hipHealthInformationRequestAcknowledgement;
        return this;
    }
}