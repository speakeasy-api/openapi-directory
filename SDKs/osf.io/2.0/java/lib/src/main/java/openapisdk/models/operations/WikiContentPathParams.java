package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WikiContentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=wiki_id")
    public String wikiId;
    public WikiContentPathParams withWikiId(String wikiId) {
        this.wikiId = wikiId;
        return this;
    }
}