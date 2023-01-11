package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListScheduleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aliases")
    public Boolean aliases;
    public ListScheduleQueryParams withAliases(Boolean aliases) {
        this.aliases = aliases;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=channelId")
    public String channelId;
    public ListScheduleQueryParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public ListScheduleQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public ListScheduleQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
}