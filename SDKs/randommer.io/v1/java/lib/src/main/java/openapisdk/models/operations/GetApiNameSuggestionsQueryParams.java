package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiNameSuggestionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingWords")
    public String startingWords;
    public GetApiNameSuggestionsQueryParams withStartingWords(String startingWords) {
        this.startingWords = startingWords;
        return this;
    }
}