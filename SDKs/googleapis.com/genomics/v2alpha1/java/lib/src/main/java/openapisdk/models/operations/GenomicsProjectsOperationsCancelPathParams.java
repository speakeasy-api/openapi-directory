package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenomicsProjectsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GenomicsProjectsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}