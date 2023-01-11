package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05LinksLinkAddContextsRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05LinksLinkAddContextsRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientCareContextLinkRequest patientCareContextLinkRequest;
    public PostV05LinksLinkAddContextsRequests withPatientCareContextLinkRequest(openapisdk.models.shared.PatientCareContextLinkRequest patientCareContextLinkRequest) {
        this.patientCareContextLinkRequest = patientCareContextLinkRequest;
        return this;
    }
}