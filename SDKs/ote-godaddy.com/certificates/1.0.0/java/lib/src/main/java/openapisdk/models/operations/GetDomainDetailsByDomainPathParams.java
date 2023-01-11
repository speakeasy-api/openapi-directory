package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainDetailsByDomainPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public GetDomainDetailsByDomainPathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customerId")
    public String customerId;
    public GetDomainDetailsByDomainPathParams withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domain")
    public String domain;
    public GetDomainDetailsByDomainPathParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}