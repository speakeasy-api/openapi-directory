package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05CareContextsOnDiscoverRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05CareContextsOnDiscoverRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientDiscoveryResult patientDiscoveryResult;
    public PostV05CareContextsOnDiscoverRequests withPatientDiscoveryResult(openapisdk.models.shared.PatientDiscoveryResult patientDiscoveryResult) {
        this.patientDiscoveryResult = patientDiscoveryResult;
        return this;
    }
}