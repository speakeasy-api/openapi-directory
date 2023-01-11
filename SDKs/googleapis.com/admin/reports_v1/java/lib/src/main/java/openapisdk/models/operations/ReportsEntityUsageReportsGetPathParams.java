package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportsEntityUsageReportsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public ReportsEntityUsageReportsGetPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=entityKey")
    public String entityKey;
    public ReportsEntityUsageReportsGetPathParams withEntityKey(String entityKey) {
        this.entityKey = entityKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=entityType")
    public ReportsEntityUsageReportsGetEntityTypeEnum entityType;
    public ReportsEntityUsageReportsGetPathParams withEntityType(ReportsEntityUsageReportsGetEntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
}