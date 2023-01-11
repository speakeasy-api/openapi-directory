package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LookupUmprnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=umprn")
    public String umprn;
    public LookupUmprnPathParams withUmprn(String umprn) {
        this.umprn = umprn;
        return this;
    }
}