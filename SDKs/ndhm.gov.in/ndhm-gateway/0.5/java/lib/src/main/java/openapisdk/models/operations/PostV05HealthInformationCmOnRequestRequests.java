package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05HealthInformationCmOnRequestRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05HealthInformationCmOnRequestRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HiuHealthInformationRequestResponse hiuHealthInformationRequestResponse;
    public PostV05HealthInformationCmOnRequestRequests withHiuHealthInformationRequestResponse(openapisdk.models.shared.HiuHealthInformationRequestResponse hiuHealthInformationRequestResponse) {
        this.hiuHealthInformationRequestResponse = hiuHealthInformationRequestResponse;
        return this;
    }
}