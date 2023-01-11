package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05HealthInformationOnRequestRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05HealthInformationOnRequestRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HipHealthInformationRequestAcknowledgement hipHealthInformationRequestAcknowledgement;
    public PostV05HealthInformationOnRequestRequests withHipHealthInformationRequestAcknowledgement(openapisdk.models.shared.HipHealthInformationRequestAcknowledgement hipHealthInformationRequestAcknowledgement) {
        this.hipHealthInformationRequestAcknowledgement = hipHealthInformationRequestAcknowledgement;
        return this;
    }
}