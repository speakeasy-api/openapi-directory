package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCorporateUserGroupsByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=corporateId")
    public Long corporateId;
    public GetCorporateUserGroupsByIdPathParams withCorporateId(Long corporateId) {
        this.corporateId = corporateId;
        return this;
    }
}