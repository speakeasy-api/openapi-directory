package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListChannelsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aliases")
    public Boolean aliases;
    public ListChannelsQueryParams withAliases(Boolean aliases) {
        this.aliases = aliases;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public String date;
    public ListChannelsQueryParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=platformId")
    public String platformId;
    public ListChannelsQueryParams withPlatformId(String platformId) {
        this.platformId = platformId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionId")
    public String regionId;
    public ListChannelsQueryParams withRegionId(String regionId) {
        this.regionId = regionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scheduleEnd")
    public String scheduleEnd;
    public ListChannelsQueryParams withScheduleEnd(String scheduleEnd) {
        this.scheduleEnd = scheduleEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scheduleStart")
    public String scheduleStart;
    public ListChannelsQueryParams withScheduleStart(String scheduleStart) {
        this.scheduleStart = scheduleStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scheduleUpdatedSince")
    public String scheduleUpdatedSince;
    public ListChannelsQueryParams withScheduleUpdatedSince(String scheduleUpdatedSince) {
        this.scheduleUpdatedSince = scheduleUpdatedSince;
        return this;
    }
}