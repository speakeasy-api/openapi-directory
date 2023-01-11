package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociationsBetweenQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=evidence")
    public String evidence;
    public GetAssociationsBetweenQueryParams withEvidence(String evidence) {
        this.evidence = evidence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_automatic_assertions")
    public Boolean excludeAutomaticAssertions;
    public GetAssociationsBetweenQueryParams withExcludeAutomaticAssertions(Boolean excludeAutomaticAssertions) {
        this.excludeAutomaticAssertions = excludeAutomaticAssertions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Long rows;
    public GetAssociationsBetweenQueryParams withRows(Long rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Long start;
    public GetAssociationsBetweenQueryParams withStart(Long start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unselect_evidence")
    public Boolean unselectEvidence;
    public GetAssociationsBetweenQueryParams withUnselectEvidence(Boolean unselectEvidence) {
        this.unselectEvidence = unselectEvidence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=use_compact_associations")
    public Boolean useCompactAssociations;
    public GetAssociationsBetweenQueryParams withUseCompactAssociations(Boolean useCompactAssociations) {
        this.useCompactAssociations = useCompactAssociations;
        return this;
    }
}