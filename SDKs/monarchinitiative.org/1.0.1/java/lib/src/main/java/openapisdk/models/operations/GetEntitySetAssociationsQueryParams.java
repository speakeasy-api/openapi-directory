package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEntitySetAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=background")
    public String[] background;
    public GetEntitySetAssociationsQueryParams withBackground(String[] background) {
        this.background = background;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=object_category")
    public String objectCategory;
    public GetEntitySetAssociationsQueryParams withObjectCategory(String objectCategory) {
        this.objectCategory = objectCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=object_slim")
    public String objectSlim;
    public GetEntitySetAssociationsQueryParams withObjectSlim(String objectSlim) {
        this.objectSlim = objectSlim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subject")
    public String[] subject;
    public GetEntitySetAssociationsQueryParams withSubject(String[] subject) {
        this.subject = subject;
        return this;
    }
}