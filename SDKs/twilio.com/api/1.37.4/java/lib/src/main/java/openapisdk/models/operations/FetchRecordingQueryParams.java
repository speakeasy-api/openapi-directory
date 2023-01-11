package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchRecordingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IncludeSoftDeleted")
    public Boolean includeSoftDeleted;
    public FetchRecordingQueryParams withIncludeSoftDeleted(Boolean includeSoftDeleted) {
        this.includeSoftDeleted = includeSoftDeleted;
        return this;
    }
}