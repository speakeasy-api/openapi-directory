package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdrnToAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public UpdrnToAddressQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=licensee")
    public String licensee;
    public UpdrnToAddressQueryParams withLicensee(String licensee) {
        this.licensee = licensee;
        return this;
    }
}