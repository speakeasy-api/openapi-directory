package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnnotationCountByAccIdUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accId")
    public String accId;
    public GetAnnotationCountByAccIdUsingGetPathParams withAccId(String accId) {
        this.accId = accId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=includeChildren")
    public Boolean includeChildren;
    public GetAnnotationCountByAccIdUsingGetPathParams withIncludeChildren(Boolean includeChildren) {
        this.includeChildren = includeChildren;
        return this;
    }
}