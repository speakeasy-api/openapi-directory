package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnnotationScoreQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=absent_id")
    public String[] absentId;
    public GetAnnotationScoreQueryParams withAbsentId(String[] absentId) {
        this.absentId = absentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String[] id;
    public GetAnnotationScoreQueryParams withId(String[] id) {
        this.id = id;
        return this;
    }
}