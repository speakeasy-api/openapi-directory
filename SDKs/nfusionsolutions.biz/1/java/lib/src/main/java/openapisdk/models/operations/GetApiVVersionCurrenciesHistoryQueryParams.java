package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionCurrenciesHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public OffsetDateTime end;
    public GetApiVVersionCurrenciesHistoryQueryParams withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public GetApiVVersionCurrenciesHistoryQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval")
    public String interval;
    public GetApiVVersionCurrenciesHistoryQueryParams withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pairs")
    public String pairs;
    public GetApiVVersionCurrenciesHistoryQueryParams withPairs(String pairs) {
        this.pairs = pairs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public OffsetDateTime start;
    public GetApiVVersionCurrenciesHistoryQueryParams withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public GetApiVVersionCurrenciesHistoryQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}