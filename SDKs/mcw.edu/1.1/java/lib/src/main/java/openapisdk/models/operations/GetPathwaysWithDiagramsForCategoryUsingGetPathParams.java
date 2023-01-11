package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPathwaysWithDiagramsForCategoryUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category")
    public String category;
    public GetPathwaysWithDiagramsForCategoryUsingGetPathParams withCategory(String category) {
        this.category = category;
        return this;
    }
}