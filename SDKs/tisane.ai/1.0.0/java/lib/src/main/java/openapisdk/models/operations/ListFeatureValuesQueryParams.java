package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFeatureValuesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public ListFeatureValuesQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public ListFeatureValuesQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public ListFeatureValuesQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}