package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MembershipsRecentlyChangedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=days")
    public String days;
    public MembershipsRecentlyChangedPathParams withDays(String days) {
        this.days = days;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public MembershipsRecentlyChangedFormatEnum format;
    public MembershipsRecentlyChangedPathParams withFormat(MembershipsRecentlyChangedFormatEnum format) {
        this.format = format;
        return this;
    }
}