package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetareacodefromnumberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetareacodefromnumberQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public String number;
    public GetareacodefromnumberQueryParams withNumber(String number) {
        this.number = number;
        return this;
    }
}