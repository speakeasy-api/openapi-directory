package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadUsageHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public Integer end;
    public DownloadUsageHistoryQueryParams withEnd(Integer end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=licensee")
    public String licensee;
    public DownloadUsageHistoryQueryParams withLicensee(String licensee) {
        this.licensee = licensee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public DownloadUsageHistoryQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
}