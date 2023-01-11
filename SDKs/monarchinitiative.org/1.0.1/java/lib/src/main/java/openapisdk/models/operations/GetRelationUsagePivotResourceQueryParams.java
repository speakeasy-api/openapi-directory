package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationUsagePivotResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=evidence")
    public String evidence;
    public GetRelationUsagePivotResourceQueryParams withEvidence(String evidence) {
        this.evidence = evidence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subject_taxon")
    public String subjectTaxon;
    public GetRelationUsagePivotResourceQueryParams withSubjectTaxon(String subjectTaxon) {
        this.subjectTaxon = subjectTaxon;
        return this;
    }
}