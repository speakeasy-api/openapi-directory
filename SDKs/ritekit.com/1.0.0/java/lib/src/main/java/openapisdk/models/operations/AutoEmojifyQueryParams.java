package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AutoEmojifyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public AutoEmojifyQueryParams withText(String text) {
        this.text = text;
        return this;
    }
}