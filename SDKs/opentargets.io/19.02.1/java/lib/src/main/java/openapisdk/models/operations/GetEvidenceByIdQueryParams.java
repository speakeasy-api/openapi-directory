package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEvidenceByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetEvidenceByIdQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}