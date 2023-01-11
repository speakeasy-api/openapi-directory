package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LookupUmprnQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public LookupUmprnQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=licensee")
    public String licensee;
    public LookupUmprnQueryParams withLicensee(String licensee) {
        this.licensee = licensee;
        return this;
    }
}