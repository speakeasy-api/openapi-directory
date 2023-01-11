package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddWordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=author")
    public String author;
    public GetAddWordQueryParams withAuthor(String author) {
        this.author = author;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=definition")
    public String definition;
    public GetAddWordQueryParams withDefinition(String definition) {
        this.definition = definition;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=related")
    public String related;
    public GetAddWordQueryParams withRelated(String related) {
        this.related = related;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=word")
    public String word;
    public GetAddWordQueryParams withWord(String word) {
        this.word = word;
        return this;
    }
}