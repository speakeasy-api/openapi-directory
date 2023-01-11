package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsBigQueryExportsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SecuritycenterProjectsBigQueryExportsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}