package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05LinksLinkInitRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05LinksLinkInitRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientLinkReferenceRequest patientLinkReferenceRequest;
    public PostV05LinksLinkInitRequests withPatientLinkReferenceRequest(openapisdk.models.shared.PatientLinkReferenceRequest patientLinkReferenceRequest) {
        this.patientLinkReferenceRequest = patientLinkReferenceRequest;
        return this;
    }
}