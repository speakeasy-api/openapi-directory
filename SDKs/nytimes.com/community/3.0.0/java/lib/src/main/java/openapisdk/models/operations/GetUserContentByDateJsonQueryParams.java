package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserContentByDateJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public String date;
    public GetUserContentByDateJsonQueryParams withDate(String date) {
        this.date = date;
        return this;
    }
}