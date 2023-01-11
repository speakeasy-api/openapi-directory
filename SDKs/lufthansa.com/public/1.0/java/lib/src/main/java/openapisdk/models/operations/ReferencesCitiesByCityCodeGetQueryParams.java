package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReferencesCitiesByCityCodeGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public String lang;
    public ReferencesCitiesByCityCodeGetQueryParams withLang(String lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public ReferencesCitiesByCityCodeGetQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public ReferencesCitiesByCityCodeGetQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}