package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListHistoricalGwsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=color")
    public ListHistoricalGwsColorEnum color;
    public ListHistoricalGwsQueryParams withColor(ListHistoricalGwsColorEnum color) {
        this.color = color;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_primeurs")
    public Boolean isPrimeurs;
    public ListHistoricalGwsQueryParams withIsPrimeurs(Boolean isPrimeurs) {
        this.isPrimeurs = isPrimeurs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListHistoricalGwsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lwin")
    public String lwin;
    public ListHistoricalGwsQueryParams withLwin(String lwin) {
        this.lwin = lwin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lwin_11")
    public String lwin11;
    public ListHistoricalGwsQueryParams withLwin11(String lwin11) {
        this.lwin11 = lwin11;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ListHistoricalGwsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering")
    public ListHistoricalGwsOrderingEnum ordering;
    public ListHistoricalGwsQueryParams withOrdering(ListHistoricalGwsOrderingEnum ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vintage")
    public String vintage;
    public ListHistoricalGwsQueryParams withVintage(String vintage) {
        this.vintage = vintage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=wine_id")
    public Long[] wineId;
    public ListHistoricalGwsQueryParams withWineId(Long[] wineId) {
        this.wineId = wineId;
        return this;
    }
}