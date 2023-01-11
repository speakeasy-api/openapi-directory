package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAspspAuthorizationLinkRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RequisitionLinkParams requisitionLinkParams;
    public CreateAspspAuthorizationLinkRequests withRequisitionLinkParams(openapisdk.models.shared.RequisitionLinkParams requisitionLinkParams) {
        this.requisitionLinkParams = requisitionLinkParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.RequisitionLinkParams requisitionLinkParams1;
    public CreateAspspAuthorizationLinkRequests withRequisitionLinkParams1(openapisdk.models.shared.RequisitionLinkParams requisitionLinkParams1) {
        this.requisitionLinkParams1 = requisitionLinkParams1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.RequisitionLinkParams requisitionLinkParams2;
    public CreateAspspAuthorizationLinkRequests withRequisitionLinkParams2(openapisdk.models.shared.RequisitionLinkParams requisitionLinkParams2) {
        this.requisitionLinkParams2 = requisitionLinkParams2;
        return this;
    }
}