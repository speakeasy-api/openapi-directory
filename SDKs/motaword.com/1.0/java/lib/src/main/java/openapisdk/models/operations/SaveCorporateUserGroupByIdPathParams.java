package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SaveCorporateUserGroupByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=corporateId")
    public Long corporateId;
    public SaveCorporateUserGroupByIdPathParams withCorporateId(Long corporateId) {
        this.corporateId = corporateId;
        return this;
    }
}