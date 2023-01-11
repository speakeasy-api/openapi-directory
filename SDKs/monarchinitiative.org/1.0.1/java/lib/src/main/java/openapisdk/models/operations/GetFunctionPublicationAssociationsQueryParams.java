package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFunctionPublicationAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=evidence")
    public String[] evidence;
    public GetFunctionPublicationAssociationsQueryParams withEvidence(String[] evidence) {
        this.evidence = evidence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Long rows;
    public GetFunctionPublicationAssociationsQueryParams withRows(Long rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Long start;
    public GetFunctionPublicationAssociationsQueryParams withStart(Long start) {
        this.start = start;
        return this;
    }
}