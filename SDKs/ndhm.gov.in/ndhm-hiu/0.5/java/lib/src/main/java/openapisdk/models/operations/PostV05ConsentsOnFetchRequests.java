package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05ConsentsOnFetchRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05ConsentsOnFetchRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConsentArtefactResponse consentArtefactResponse;
    public PostV05ConsentsOnFetchRequests withConsentArtefactResponse(openapisdk.models.shared.ConsentArtefactResponse consentArtefactResponse) {
        this.consentArtefactResponse = consentArtefactResponse;
        return this;
    }
}