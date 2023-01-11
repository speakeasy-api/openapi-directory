package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05HealthInformationHiuOnRequestRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05HealthInformationHiuOnRequestRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HiuHealthInformationRequestResponse hiuHealthInformationRequestResponse;
    public PostV05HealthInformationHiuOnRequestRequests withHiuHealthInformationRequestResponse(openapisdk.models.shared.HiuHealthInformationRequestResponse hiuHealthInformationRequestResponse) {
        this.hiuHealthInformationRequestResponse = hiuHealthInformationRequestResponse;
        return this;
    }
}