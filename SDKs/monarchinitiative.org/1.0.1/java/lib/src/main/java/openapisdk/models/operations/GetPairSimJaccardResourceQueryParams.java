package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPairSimJaccardResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=object_category")
    public String objectCategory;
    public GetPairSimJaccardResourceQueryParams withObjectCategory(String objectCategory) {
        this.objectCategory = objectCategory;
        return this;
    }
}