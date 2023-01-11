package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenomicsProjectsWorkersCheckInPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GenomicsProjectsWorkersCheckInPathParams withId(String id) {
        this.id = id;
        return this;
    }
}