package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05LinksLinkOnConfirmRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05LinksLinkOnConfirmRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientLinkResult patientLinkResult;
    public PostV05LinksLinkOnConfirmRequests withPatientLinkResult(openapisdk.models.shared.PatientLinkResult patientLinkResult) {
        this.patientLinkResult = patientLinkResult;
        return this;
    }
}