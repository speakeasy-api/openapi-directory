package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionPackageRelationshipsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetActionPackageRelationshipsListQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id2")
    public String id2;
    public GetActionPackageRelationshipsListQueryParams withId2(String id2) {
        this.id2 = id2;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rel")
    public String rel;
    public GetActionPackageRelationshipsListQueryParams withRel(String rel) {
        this.rel = rel;
        return this;
    }
}