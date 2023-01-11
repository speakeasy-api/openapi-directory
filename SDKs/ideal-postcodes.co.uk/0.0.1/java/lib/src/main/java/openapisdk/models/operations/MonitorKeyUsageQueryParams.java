package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitorKeyUsageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public Integer end;
    public MonitorKeyUsageQueryParams withEnd(Integer end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=licensee")
    public String licensee;
    public MonitorKeyUsageQueryParams withLicensee(String licensee) {
        this.licensee = licensee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public MonitorKeyUsageQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String tags;
    public MonitorKeyUsageQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}