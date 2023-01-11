package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatterVsPitcherStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public BatterVsPitcherStatsFormatEnum format;
    public BatterVsPitcherStatsPathParams withFormat(BatterVsPitcherStatsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hitterid")
    public String hitterid;
    public BatterVsPitcherStatsPathParams withHitterid(String hitterid) {
        this.hitterid = hitterid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pitcherid")
    public String pitcherid;
    public BatterVsPitcherStatsPathParams withPitcherid(String pitcherid) {
        this.pitcherid = pitcherid;
        return this;
    }
}