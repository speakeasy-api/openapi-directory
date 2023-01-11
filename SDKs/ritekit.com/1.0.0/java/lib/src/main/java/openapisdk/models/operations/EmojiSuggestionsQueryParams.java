package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmojiSuggestionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public EmojiSuggestionsQueryParams withText(String text) {
        this.text = text;
        return this;
    }
}