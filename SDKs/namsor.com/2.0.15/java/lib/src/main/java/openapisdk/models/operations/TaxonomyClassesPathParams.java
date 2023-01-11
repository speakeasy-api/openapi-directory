package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaxonomyClassesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=classifierName")
    public String classifierName;
    public TaxonomyClassesPathParams withClassifierName(String classifierName) {
        this.classifierName = classifierName;
        return this;
    }
}