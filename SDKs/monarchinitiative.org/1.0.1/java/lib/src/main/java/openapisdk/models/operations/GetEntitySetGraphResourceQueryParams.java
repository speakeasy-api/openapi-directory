package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEntitySetGraphResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=background")
    public String[] background;
    public GetEntitySetGraphResourceQueryParams withBackground(String[] background) {
        this.background = background;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=object_category")
    public String objectCategory;
    public GetEntitySetGraphResourceQueryParams withObjectCategory(String objectCategory) {
        this.objectCategory = objectCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=object_slim")
    public String objectSlim;
    public GetEntitySetGraphResourceQueryParams withObjectSlim(String objectSlim) {
        this.objectSlim = objectSlim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subject")
    public String[] subject;
    public GetEntitySetGraphResourceQueryParams withSubject(String[] subject) {
        this.subject = subject;
        return this;
    }
}