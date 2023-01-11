package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionMetalsSpotHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currency")
    public String currency;
    public GetApiVVersionMetalsSpotHistoryQueryParams withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public OffsetDateTime end;
    public GetApiVVersionMetalsSpotHistoryQueryParams withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public GetApiVVersionMetalsSpotHistoryQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=historicalfx")
    public Boolean historicalfx;
    public GetApiVVersionMetalsSpotHistoryQueryParams withHistoricalfx(Boolean historicalfx) {
        this.historicalfx = historicalfx;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval")
    public String interval;
    public GetApiVVersionMetalsSpotHistoryQueryParams withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metals")
    public String metals;
    public GetApiVVersionMetalsSpotHistoryQueryParams withMetals(String metals) {
        this.metals = metals;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public OffsetDateTime start;
    public GetApiVVersionMetalsSpotHistoryQueryParams withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public GetApiVVersionMetalsSpotHistoryQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unitofmeasure")
    public openapisdk.models.shared.UnitOfMeasureEnum unitofmeasure;
    public GetApiVVersionMetalsSpotHistoryQueryParams withUnitofmeasure(openapisdk.models.shared.UnitOfMeasureEnum unitofmeasure) {
        this.unitofmeasure = unitofmeasure;
        return this;
    }
}