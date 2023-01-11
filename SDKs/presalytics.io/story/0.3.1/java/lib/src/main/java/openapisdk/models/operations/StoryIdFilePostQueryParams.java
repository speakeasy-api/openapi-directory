package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdFilePostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_outline")
    public Boolean includeOutline;
    public StoryIdFilePostQueryParams withIncludeOutline(Boolean includeOutline) {
        this.includeOutline = includeOutline;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=obsolete_id")
    public String obsoleteId;
    public StoryIdFilePostQueryParams withObsoleteId(String obsoleteId) {
        this.obsoleteId = obsoleteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=replace_existing")
    public Boolean replaceExisting;
    public StoryIdFilePostQueryParams withReplaceExisting(Boolean replaceExisting) {
        this.replaceExisting = replaceExisting;
        return this;
    }
}