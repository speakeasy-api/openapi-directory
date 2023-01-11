package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allImages")
    public Boolean allImages;
    public DeleteImagesQueryParams withAllImages(Boolean allImages) {
        this.allImages = allImages;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allIterations")
    public Boolean allIterations;
    public DeleteImagesQueryParams withAllIterations(Boolean allIterations) {
        this.allIterations = allIterations;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=imageIds")
    public String[] imageIds;
    public DeleteImagesQueryParams withImageIds(String[] imageIds) {
        this.imageIds = imageIds;
        return this;
    }
}