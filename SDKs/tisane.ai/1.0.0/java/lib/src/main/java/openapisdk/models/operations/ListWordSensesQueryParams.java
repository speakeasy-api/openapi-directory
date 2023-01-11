package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWordSensesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public ListWordSensesQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=word")
    public String word;
    public ListWordSensesQueryParams withWord(String word) {
        this.word = word;
        return this;
    }
}