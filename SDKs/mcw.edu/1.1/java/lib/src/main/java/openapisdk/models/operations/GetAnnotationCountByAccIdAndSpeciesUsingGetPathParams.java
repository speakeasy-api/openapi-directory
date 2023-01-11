package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnnotationCountByAccIdAndSpeciesUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accId")
    public String accId;
    public GetAnnotationCountByAccIdAndSpeciesUsingGetPathParams withAccId(String accId) {
        this.accId = accId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=includeChildren")
    public Boolean includeChildren;
    public GetAnnotationCountByAccIdAndSpeciesUsingGetPathParams withIncludeChildren(Boolean includeChildren) {
        this.includeChildren = includeChildren;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetAnnotationCountByAccIdAndSpeciesUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}