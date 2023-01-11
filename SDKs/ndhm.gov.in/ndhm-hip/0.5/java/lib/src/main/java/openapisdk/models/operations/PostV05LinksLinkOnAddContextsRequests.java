package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05LinksLinkOnAddContextsRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05LinksLinkOnAddContextsRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientCareContextLinkResponse patientCareContextLinkResponse;
    public PostV05LinksLinkOnAddContextsRequests withPatientCareContextLinkResponse(openapisdk.models.shared.PatientCareContextLinkResponse patientCareContextLinkResponse) {
        this.patientCareContextLinkResponse = patientCareContextLinkResponse;
        return this;
    }
}