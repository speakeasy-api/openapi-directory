package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGlobalwinescoresLatestQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=color")
    public GetGlobalwinescoresLatestColorEnum color;
    public GetGlobalwinescoresLatestQueryParams withColor(GetGlobalwinescoresLatestColorEnum color) {
        this.color = color;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_primeurs")
    public Boolean isPrimeurs;
    public GetGlobalwinescoresLatestQueryParams withIsPrimeurs(Boolean isPrimeurs) {
        this.isPrimeurs = isPrimeurs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetGlobalwinescoresLatestQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lwin")
    public String lwin;
    public GetGlobalwinescoresLatestQueryParams withLwin(String lwin) {
        this.lwin = lwin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lwin_11")
    public String lwin11;
    public GetGlobalwinescoresLatestQueryParams withLwin11(String lwin11) {
        this.lwin11 = lwin11;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetGlobalwinescoresLatestQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering")
    public GetGlobalwinescoresLatestOrderingEnum ordering;
    public GetGlobalwinescoresLatestQueryParams withOrdering(GetGlobalwinescoresLatestOrderingEnum ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vintage")
    public String vintage;
    public GetGlobalwinescoresLatestQueryParams withVintage(String vintage) {
        this.vintage = vintage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=wine_id")
    public Long[] wineId;
    public GetGlobalwinescoresLatestQueryParams withWineId(Long[] wineId) {
        this.wineId = wineId;
        return this;
    }
}