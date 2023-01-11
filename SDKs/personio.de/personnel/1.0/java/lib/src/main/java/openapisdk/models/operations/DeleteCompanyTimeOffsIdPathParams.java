package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCompanyTimeOffsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteCompanyTimeOffsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}