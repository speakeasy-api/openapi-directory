package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public String after;
    public GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams withAfter(String after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams withBefore(String before) {
        this.before = before;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=posten")
    public Boolean posten;
    public GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams withPosten(Boolean posten) {
        this.posten = posten;
        return this;
    }
}