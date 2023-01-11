package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckIfUserSubscribedToCategoryAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category")
    public String category;
    public CheckIfUserSubscribedToCategoryAlt1PathParams withCategory(String category) {
        this.category = category;
        return this;
    }
}