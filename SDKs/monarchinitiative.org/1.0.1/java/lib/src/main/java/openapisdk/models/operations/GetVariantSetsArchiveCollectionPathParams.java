package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVariantSetsArchiveCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=day")
    public Long day;
    public GetVariantSetsArchiveCollectionPathParams withDay(Long day) {
        this.day = day;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=month")
    public Long month;
    public GetVariantSetsArchiveCollectionPathParams withMonth(Long month) {
        this.month = month;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public Long year;
    public GetVariantSetsArchiveCollectionPathParams withYear(Long year) {
        this.year = year;
        return this;
    }
}