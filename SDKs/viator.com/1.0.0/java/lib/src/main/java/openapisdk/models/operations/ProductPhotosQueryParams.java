package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductPhotosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=code")
    public String code;
    public ProductPhotosQueryParams withCode(String code) {
        this.code = code;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showUnavailable")
    public Boolean showUnavailable;
    public ProductPhotosQueryParams withShowUnavailable(Boolean showUnavailable) {
        this.showUnavailable = showUnavailable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=topX")
    public String topX;
    public ProductPhotosQueryParams withTopX(String topX) {
        this.topX = topX;
        return this;
    }
}