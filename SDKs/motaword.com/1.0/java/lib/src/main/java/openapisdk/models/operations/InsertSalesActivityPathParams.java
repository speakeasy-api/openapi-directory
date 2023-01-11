package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InsertSalesActivityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public InsertSalesActivityPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}