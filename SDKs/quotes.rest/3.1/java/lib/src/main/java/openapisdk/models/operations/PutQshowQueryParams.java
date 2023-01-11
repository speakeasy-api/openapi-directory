package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutQshowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public PutQshowQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String[] tags;
    public PutQshowQueryParams withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=title")
    public String title;
    public PutQshowQueryParams withTitle(String title) {
        this.title = title;
        return this;
    }
}