package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05LinksLinkConfirmRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05LinksLinkConfirmRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LinkConfirmationRequest linkConfirmationRequest;
    public PostV05LinksLinkConfirmRequests withLinkConfirmationRequest(openapisdk.models.shared.LinkConfirmationRequest linkConfirmationRequest) {
        this.linkConfirmationRequest = linkConfirmationRequest;
        return this;
    }
}