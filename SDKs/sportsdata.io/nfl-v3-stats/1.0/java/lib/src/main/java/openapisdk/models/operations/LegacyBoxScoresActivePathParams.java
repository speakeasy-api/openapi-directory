package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LegacyBoxScoresActivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public LegacyBoxScoresActiveFormatEnum format;
    public LegacyBoxScoresActivePathParams withFormat(LegacyBoxScoresActiveFormatEnum format) {
        this.format = format;
        return this;
    }
}