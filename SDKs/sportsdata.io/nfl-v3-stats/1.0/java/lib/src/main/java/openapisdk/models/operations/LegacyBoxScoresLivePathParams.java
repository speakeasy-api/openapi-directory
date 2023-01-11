package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LegacyBoxScoresLivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public LegacyBoxScoresLiveFormatEnum format;
    public LegacyBoxScoresLivePathParams withFormat(LegacyBoxScoresLiveFormatEnum format) {
        this.format = format;
        return this;
    }
}