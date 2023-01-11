package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionMetalsBenchmarkHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currency")
    public String currency;
    public GetApiVVersionMetalsBenchmarkHistoryQueryParams withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public OffsetDateTime end;
    public GetApiVVersionMetalsBenchmarkHistoryQueryParams withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public GetApiVVersionMetalsBenchmarkHistoryQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=historicalfx")
    public Boolean historicalfx;
    public GetApiVVersionMetalsBenchmarkHistoryQueryParams withHistoricalfx(Boolean historicalfx) {
        this.historicalfx = historicalfx;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval")
    public String interval;
    public GetApiVVersionMetalsBenchmarkHistoryQueryParams withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metals")
    public String metals;
    public GetApiVVersionMetalsBenchmarkHistoryQueryParams withMetals(String metals) {
        this.metals = metals;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public OffsetDateTime start;
    public GetApiVVersionMetalsBenchmarkHistoryQueryParams withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public GetApiVVersionMetalsBenchmarkHistoryQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unitofmeasure")
    public openapisdk.models.shared.UnitOfMeasureEnum unitofmeasure;
    public GetApiVVersionMetalsBenchmarkHistoryQueryParams withUnitofmeasure(openapisdk.models.shared.UnitOfMeasureEnum unitofmeasure) {
        this.unitofmeasure = unitofmeasure;
        return this;
    }
}