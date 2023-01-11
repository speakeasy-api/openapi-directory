package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSettingsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSettingsUpdateQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Sim")
    public String sim;
    public ListSettingsUpdateQueryParams withSim(String sim) {
        this.sim = sim;
        return this;
    }
}