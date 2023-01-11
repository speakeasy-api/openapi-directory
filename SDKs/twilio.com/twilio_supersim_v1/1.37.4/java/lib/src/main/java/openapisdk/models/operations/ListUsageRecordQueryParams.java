package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageRecordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndTime")
    public OffsetDateTime endTime;
    public ListUsageRecordQueryParams withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Fleet")
    public String fleet;
    public ListUsageRecordQueryParams withFleet(String fleet) {
        this.fleet = fleet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Granularity")
    public openapisdk.models.shared.UsageRecordEnumGranularityEnum granularity;
    public ListUsageRecordQueryParams withGranularity(openapisdk.models.shared.UsageRecordEnumGranularityEnum granularity) {
        this.granularity = granularity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Group")
    public openapisdk.models.shared.UsageRecordEnumGroupEnum group;
    public ListUsageRecordQueryParams withGroup(openapisdk.models.shared.UsageRecordEnumGroupEnum group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IsoCountry")
    public String isoCountry;
    public ListUsageRecordQueryParams withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Network")
    public String network;
    public ListUsageRecordQueryParams withNetwork(String network) {
        this.network = network;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUsageRecordQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Sim")
    public String sim;
    public ListUsageRecordQueryParams withSim(String sim) {
        this.sim = sim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartTime")
    public OffsetDateTime startTime;
    public ListUsageRecordQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}