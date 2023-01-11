package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05LinksLinkOnInitRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05LinksLinkOnInitRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientLinkReferenceResult patientLinkReferenceResult;
    public PostV05LinksLinkOnInitRequests withPatientLinkReferenceResult(openapisdk.models.shared.PatientLinkReferenceResult patientLinkReferenceResult) {
        this.patientLinkReferenceResult = patientLinkReferenceResult;
        return this;
    }
}