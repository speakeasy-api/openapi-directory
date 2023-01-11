package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}