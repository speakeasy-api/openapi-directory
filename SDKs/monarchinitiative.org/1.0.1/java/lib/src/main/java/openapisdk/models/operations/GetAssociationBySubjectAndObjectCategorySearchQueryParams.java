package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociationBySubjectAndObjectCategorySearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=evidence")
    public String evidence;
    public GetAssociationBySubjectAndObjectCategorySearchQueryParams withEvidence(String evidence) {
        this.evidence = evidence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_automatic_assertions")
    public Boolean excludeAutomaticAssertions;
    public GetAssociationBySubjectAndObjectCategorySearchQueryParams withExcludeAutomaticAssertions(Boolean excludeAutomaticAssertions) {
        this.excludeAutomaticAssertions = excludeAutomaticAssertions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=object")
    public String object;
    public GetAssociationBySubjectAndObjectCategorySearchQueryParams withObject(String object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=object_taxon")
    public String objectTaxon;
    public GetAssociationBySubjectAndObjectCategorySearchQueryParams withObjectTaxon(String objectTaxon) {
        this.objectTaxon = objectTaxon;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=relation")
    public String relation;
    public GetAssociationBySubjectAndObjectCategorySearchQueryParams withRelation(String relation) {
        this.relation = relation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Long rows;
    public GetAssociationBySubjectAndObjectCategorySearchQueryParams withRows(Long rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Long start;
    public GetAssociationBySubjectAndObjectCategorySearchQueryParams withStart(Long start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subject")
    public String subject;
    public GetAssociationBySubjectAndObjectCategorySearchQueryParams withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subject_taxon")
    public String subjectTaxon;
    public GetAssociationBySubjectAndObjectCategorySearchQueryParams withSubjectTaxon(String subjectTaxon) {
        this.subjectTaxon = subjectTaxon;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unselect_evidence")
    public Boolean unselectEvidence;
    public GetAssociationBySubjectAndObjectCategorySearchQueryParams withUnselectEvidence(Boolean unselectEvidence) {
        this.unselectEvidence = unselectEvidence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=use_compact_associations")
    public Boolean useCompactAssociations;
    public GetAssociationBySubjectAndObjectCategorySearchQueryParams withUseCompactAssociations(Boolean useCompactAssociations) {
        this.useCompactAssociations = useCompactAssociations;
        return this;
    }
}