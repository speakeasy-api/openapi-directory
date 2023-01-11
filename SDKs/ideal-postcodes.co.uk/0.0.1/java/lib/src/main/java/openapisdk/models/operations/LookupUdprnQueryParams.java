package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LookupUdprnQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public LookupUdprnQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=licensee")
    public String licensee;
    public LookupUdprnQueryParams withLicensee(String licensee) {
        this.licensee = licensee;
        return this;
    }
}