package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCorporateUsersByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=corporateId")
    public Long corporateId;
    public GetCorporateUsersByIdPathParams withCorporateId(Long corporateId) {
        this.corporateId = corporateId;
        return this;
    }
}