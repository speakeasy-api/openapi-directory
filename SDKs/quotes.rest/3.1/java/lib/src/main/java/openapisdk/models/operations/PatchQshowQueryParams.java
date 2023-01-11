package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchQshowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public PatchQshowQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public PatchQshowQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String[] tags;
    public PatchQshowQueryParams withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=title")
    public String title;
    public PatchQshowQueryParams withTitle(String title) {
        this.title = title;
        return this;
    }
}