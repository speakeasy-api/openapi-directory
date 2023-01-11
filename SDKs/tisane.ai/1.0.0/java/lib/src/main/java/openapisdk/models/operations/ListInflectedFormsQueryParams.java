package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInflectedFormsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=family")
    public String family;
    public ListInflectedFormsQueryParams withFamily(String family) {
        this.family = family;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public ListInflectedFormsQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lexeme")
    public String lexeme;
    public ListInflectedFormsQueryParams withLexeme(String lexeme) {
        this.lexeme = lexeme;
        return this;
    }
}