package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AbusiveexperiencereportSitesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AbusiveexperiencereportSitesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}