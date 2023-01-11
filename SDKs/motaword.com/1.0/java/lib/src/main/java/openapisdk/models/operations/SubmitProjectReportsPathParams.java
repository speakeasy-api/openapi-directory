package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitProjectReportsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public SubmitProjectReportsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}