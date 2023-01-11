package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationUsageResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=evidence")
    public String evidence;
    public GetRelationUsageResourceQueryParams withEvidence(String evidence) {
        this.evidence = evidence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subject_taxon")
    public String subjectTaxon;
    public GetRelationUsageResourceQueryParams withSubjectTaxon(String subjectTaxon) {
        this.subjectTaxon = subjectTaxon;
        return this;
    }
}