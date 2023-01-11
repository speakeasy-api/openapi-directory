package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexperiencereportSitesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AdexperiencereportSitesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}