package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListsDateListJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public GetListsDateListJsonPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=list")
    public String list;
    public GetListsDateListJsonPathParams withList(String list) {
        this.list = list;
        return this;
    }
}