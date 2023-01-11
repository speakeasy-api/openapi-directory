package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateANewRequisitionRequestsInput {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RequisitionInput requisition;
    public CreateANewRequisitionRequestsInput withRequisition(openapisdk.models.shared.RequisitionInput requisition) {
        this.requisition = requisition;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.RequisitionInput requisition1;
    public CreateANewRequisitionRequestsInput withRequisition1(openapisdk.models.shared.RequisitionInput requisition1) {
        this.requisition1 = requisition1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.RequisitionInput requisition2;
    public CreateANewRequisitionRequestsInput withRequisition2(openapisdk.models.shared.RequisitionInput requisition2) {
        this.requisition2 = requisition2;
        return this;
    }
}