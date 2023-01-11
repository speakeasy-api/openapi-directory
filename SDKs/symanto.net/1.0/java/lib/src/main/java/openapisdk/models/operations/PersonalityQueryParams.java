package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PersonalityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public Boolean all;
    public PersonalityQueryParams withAll(Boolean all) {
        this.all = all;
        return this;
    }
}