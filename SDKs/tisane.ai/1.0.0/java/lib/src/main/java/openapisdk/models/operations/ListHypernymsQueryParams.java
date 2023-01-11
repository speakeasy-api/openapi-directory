package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListHypernymsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=family")
    public String family;
    public ListHypernymsQueryParams withFamily(String family) {
        this.family = family;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxLevel")
    public String maxLevel;
    public ListHypernymsQueryParams withMaxLevel(String maxLevel) {
        this.maxLevel = maxLevel;
        return this;
    }
}