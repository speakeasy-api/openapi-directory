package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public Long id;
    public ValidateQueryParams withId(Long id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag")
    public String[] tag;
    public ValidateQueryParams withTag(String[] tag) {
        this.tag = tag;
        return this;
    }
}