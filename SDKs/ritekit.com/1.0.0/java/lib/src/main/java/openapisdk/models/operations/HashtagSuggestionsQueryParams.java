package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HashtagSuggestionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public HashtagSuggestionsQueryParams withText(String text) {
        this.text = text;
        return this;
    }
}