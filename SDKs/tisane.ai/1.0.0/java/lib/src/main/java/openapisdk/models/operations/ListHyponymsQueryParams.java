package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListHyponymsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=family")
    public String family;
    public ListHyponymsQueryParams withFamily(String family) {
        this.family = family;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxLevel")
    public String maxLevel;
    public ListHyponymsQueryParams withMaxLevel(String maxLevel) {
        this.maxLevel = maxLevel;
        return this;
    }
}