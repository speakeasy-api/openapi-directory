package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAvailableCorporatePermissionsByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=corporateId")
    public Long corporateId;
    public GetAvailableCorporatePermissionsByIdPathParams withCorporateId(Long corporateId) {
        this.corporateId = corporateId;
        return this;
    }
}