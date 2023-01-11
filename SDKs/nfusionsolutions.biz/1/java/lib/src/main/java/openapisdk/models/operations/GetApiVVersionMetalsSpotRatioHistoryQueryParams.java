package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionMetalsSpotRatioHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public OffsetDateTime end;
    public GetApiVVersionMetalsSpotRatioHistoryQueryParams withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public GetApiVVersionMetalsSpotRatioHistoryQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval")
    public String interval;
    public GetApiVVersionMetalsSpotRatioHistoryQueryParams withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pairs")
    public String pairs;
    public GetApiVVersionMetalsSpotRatioHistoryQueryParams withPairs(String pairs) {
        this.pairs = pairs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public OffsetDateTime start;
    public GetApiVVersionMetalsSpotRatioHistoryQueryParams withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public GetApiVVersionMetalsSpotRatioHistoryQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}