package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllFacilitiesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public GetAllFacilitiesAcceptEnum accept;
    public GetAllFacilitiesHeaders withAccept(GetAllFacilitiesAcceptEnum accept) {
        this.accept = accept;
        return this;
    }
}