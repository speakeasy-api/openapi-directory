package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SeatDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public String lang;
    public SeatDetailsQueryParams withLang(String lang) {
        this.lang = lang;
        return this;
    }
}