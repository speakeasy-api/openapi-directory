package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNominalCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PostNominalCodePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}