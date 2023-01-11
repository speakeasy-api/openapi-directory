package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnnotationsUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accId")
    public String accId;
    public GetAnnotationsUsingGetPathParams withAccId(String accId) {
        this.accId = accId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=includeChildren")
    public Boolean includeChildren;
    public GetAnnotationsUsingGetPathParams withIncludeChildren(Boolean includeChildren) {
        this.includeChildren = includeChildren;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetAnnotationsUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}