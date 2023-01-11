package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveDetailsAboutSpecificAspspPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public RetrieveDetailsAboutSpecificAspspPathParams withId(String id) {
        this.id = id;
        return this;
    }
}