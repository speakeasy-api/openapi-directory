package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dateTimeTz")
    public OffsetDateTime dateTimeTz;
    public GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams withDateTimeTz(OffsetDateTime dateTimeTz) {
        this.dateTimeTz = dateTimeTz;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceId")
    public String resourceId;
    public GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}