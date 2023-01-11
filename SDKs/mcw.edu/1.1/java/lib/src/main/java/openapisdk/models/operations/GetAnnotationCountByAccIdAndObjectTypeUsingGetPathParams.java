package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnnotationCountByAccIdAndObjectTypeUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accId")
    public String accId;
    public GetAnnotationCountByAccIdAndObjectTypeUsingGetPathParams withAccId(String accId) {
        this.accId = accId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=includeChildren")
    public Boolean includeChildren;
    public GetAnnotationCountByAccIdAndObjectTypeUsingGetPathParams withIncludeChildren(Boolean includeChildren) {
        this.includeChildren = includeChildren;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=objectType")
    public Integer objectType;
    public GetAnnotationCountByAccIdAndObjectTypeUsingGetPathParams withObjectType(Integer objectType) {
        this.objectType = objectType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetAnnotationCountByAccIdAndObjectTypeUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}