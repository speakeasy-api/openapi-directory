package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BoxScoresVSimulationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public BoxScoresVSimulationFormatEnum format;
    public BoxScoresVSimulationPathParams withFormat(BoxScoresVSimulationFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=numberofplays")
    public String numberofplays;
    public BoxScoresVSimulationPathParams withNumberofplays(String numberofplays) {
        this.numberofplays = numberofplays;
        return this;
    }
}