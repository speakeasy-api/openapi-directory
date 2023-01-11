package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsBigQueryExportsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SecuritycenterProjectsBigQueryExportsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}