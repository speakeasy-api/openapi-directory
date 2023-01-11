package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WikiReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=wiki_id")
    public String wikiId;
    public WikiReadPathParams withWikiId(String wikiId) {
        this.wikiId = wikiId;
        return this;
    }
}