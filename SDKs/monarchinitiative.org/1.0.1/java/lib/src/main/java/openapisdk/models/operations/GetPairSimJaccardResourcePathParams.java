package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPairSimJaccardResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id1")
    public String id1;
    public GetPairSimJaccardResourcePathParams withId1(String id1) {
        this.id1 = id1;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id2")
    public String id2;
    public GetPairSimJaccardResourcePathParams withId2(String id2) {
        this.id2 = id2;
        return this;
    }
}