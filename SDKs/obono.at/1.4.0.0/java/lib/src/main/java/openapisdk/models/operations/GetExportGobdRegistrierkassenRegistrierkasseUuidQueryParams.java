package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportGobdRegistrierkassenRegistrierkasseUuidQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public String after;
    public GetExportGobdRegistrierkassenRegistrierkasseUuidQueryParams withAfter(String after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public GetExportGobdRegistrierkassenRegistrierkasseUuidQueryParams withBefore(String before) {
        this.before = before;
        return this;
    }
}