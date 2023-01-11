package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsCapacityCommitmentsSplitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsSplitPathParams withName(String name) {
        this.name = name;
        return this;
    }
}