package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFleetFleetnamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fleetname")
    public String fleetname;
    public GetFleetFleetnamePathParams withFleetname(String fleetname) {
        this.fleetname = fleetname;
        return this;
    }
}