package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public String after;
    public GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryParams withAfter(String after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryParams withBefore(String before) {
        this.before = before;
        return this;
    }
}