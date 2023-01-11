package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QuerySuggestedImagesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public QuerySuggestedImagesHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}