package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherReviewsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherReviewsListPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
}