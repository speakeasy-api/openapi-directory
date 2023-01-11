package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LegacyBoxScoresFinalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public LegacyBoxScoresFinalFormatEnum format;
    public LegacyBoxScoresFinalPathParams withFormat(LegacyBoxScoresFinalFormatEnum format) {
        this.format = format;
        return this;
    }
}