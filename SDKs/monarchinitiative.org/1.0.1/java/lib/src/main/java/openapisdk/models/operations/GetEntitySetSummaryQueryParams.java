package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEntitySetSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=background")
    public String[] background;
    public GetEntitySetSummaryQueryParams withBackground(String[] background) {
        this.background = background;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=object_category")
    public String objectCategory;
    public GetEntitySetSummaryQueryParams withObjectCategory(String objectCategory) {
        this.objectCategory = objectCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=object_slim")
    public String objectSlim;
    public GetEntitySetSummaryQueryParams withObjectSlim(String objectSlim) {
        this.objectSlim = objectSlim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subject")
    public String[] subject;
    public GetEntitySetSummaryQueryParams withSubject(String[] subject) {
        this.subject = subject;
        return this;
    }
}