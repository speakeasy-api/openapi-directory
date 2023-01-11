package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=imageIds")
    public String[] imageIds;
    public DeleteImagesQueryParams withImageIds(String[] imageIds) {
        this.imageIds = imageIds;
        return this;
    }
}