package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnimateImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public AnimateImageQueryParams withType(String type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public AnimateImageQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}