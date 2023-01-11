package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCorporateByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=corporateId")
    public Long corporateId;
    public GetCorporateByIdPathParams withCorporateId(Long corporateId) {
        this.corporateId = corporateId;
        return this;
    }
}