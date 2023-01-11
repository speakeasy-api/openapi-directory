package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenesByKeywordUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=keyword")
    public String keyword;
    public GetGenesByKeywordUsingGetPathParams withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetGenesByKeywordUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}