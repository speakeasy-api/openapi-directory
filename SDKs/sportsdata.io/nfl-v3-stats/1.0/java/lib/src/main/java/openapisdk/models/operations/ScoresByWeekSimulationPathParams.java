package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScoresByWeekSimulationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ScoresByWeekSimulationFormatEnum format;
    public ScoresByWeekSimulationPathParams withFormat(ScoresByWeekSimulationFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=numberofplays")
    public String numberofplays;
    public ScoresByWeekSimulationPathParams withNumberofplays(String numberofplays) {
        this.numberofplays = numberofplays;
        return this;
    }
}