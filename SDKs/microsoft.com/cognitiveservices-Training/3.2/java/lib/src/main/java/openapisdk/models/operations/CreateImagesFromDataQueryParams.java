package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateImagesFromDataQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=tagIds")
    public String[] tagIds;
    public CreateImagesFromDataQueryParams withTagIds(String[] tagIds) {
        this.tagIds = tagIds;
        return this;
    }
}