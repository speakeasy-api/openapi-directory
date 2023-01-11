package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSalesActivitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludeOwner")
    public String excludeOwner;
    public GetSalesActivitiesQueryParams withExcludeOwner(String excludeOwner) {
        this.excludeOwner = excludeOwner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public openapisdk.models.shared.SalesActivityTypeEnum type;
    public GetSalesActivitiesQueryParams withType(openapisdk.models.shared.SalesActivityTypeEnum type) {
        this.type = type;
        return this;
    }
}