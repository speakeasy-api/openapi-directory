package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProductsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uuid")
    public String[] uuid;
    public DeleteProductsQueryParams withUuid(String[] uuid) {
        this.uuid = uuid;
        return this;
    }
}