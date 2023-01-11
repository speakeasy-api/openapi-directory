package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrendingHashtagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=green")
    public Boolean green;
    public TrendingHashtagsQueryParams withGreen(Boolean green) {
        this.green = green;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latin")
    public Boolean latin;
    public TrendingHashtagsQueryParams withLatin(Boolean latin) {
        this.latin = latin;
        return this;
    }
}