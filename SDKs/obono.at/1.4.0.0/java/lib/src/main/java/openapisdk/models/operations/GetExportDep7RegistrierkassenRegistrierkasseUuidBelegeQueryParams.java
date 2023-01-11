package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public String after;
    public GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryParams withAfter(String after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryParams withBefore(String before) {
        this.before = before;
        return this;
    }
}