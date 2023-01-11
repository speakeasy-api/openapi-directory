package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AreGamesInProgressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public AreGamesInProgressFormatEnum format;
    public AreGamesInProgressPathParams withFormat(AreGamesInProgressFormatEnum format) {
        this.format = format;
        return this;
    }
}