package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationUsageBetweenResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=evidence")
    public String evidence;
    public GetRelationUsageBetweenResourceQueryParams withEvidence(String evidence) {
        this.evidence = evidence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subject_taxon")
    public String subjectTaxon;
    public GetRelationUsageBetweenResourceQueryParams withSubjectTaxon(String subjectTaxon) {
        this.subjectTaxon = subjectTaxon;
        return this;
    }
}