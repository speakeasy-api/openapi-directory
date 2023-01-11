package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05CareContextsDiscoverRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05CareContextsDiscoverRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatientDiscoveryRequest patientDiscoveryRequest;
    public PostV05CareContextsDiscoverRequests withPatientDiscoveryRequest(openapisdk.models.shared.PatientDiscoveryRequest patientDiscoveryRequest) {
        this.patientDiscoveryRequest = patientDiscoveryRequest;
        return this;
    }
}