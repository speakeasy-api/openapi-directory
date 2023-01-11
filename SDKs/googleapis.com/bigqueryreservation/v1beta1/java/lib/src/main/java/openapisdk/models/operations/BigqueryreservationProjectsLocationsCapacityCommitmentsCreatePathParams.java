package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}