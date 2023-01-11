package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayByPlaySimulationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayByPlaySimulationFormatEnum format;
    public PlayByPlaySimulationPathParams withFormat(PlayByPlaySimulationFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=numberofplays")
    public String numberofplays;
    public PlayByPlaySimulationPathParams withNumberofplays(String numberofplays) {
        this.numberofplays = numberofplays;
        return this;
    }
}