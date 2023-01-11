package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiseaseGenotypeAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direct")
    public Boolean direct;
    public GetDiseaseGenotypeAssociationsQueryParams withDirect(Boolean direct) {
        this.direct = direct;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direct_taxon")
    public Boolean directTaxon;
    public GetDiseaseGenotypeAssociationsQueryParams withDirectTaxon(Boolean directTaxon) {
        this.directTaxon = directTaxon;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=evidence")
    public String evidence;
    public GetDiseaseGenotypeAssociationsQueryParams withEvidence(String evidence) {
        this.evidence = evidence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_automatic_assertions")
    public Boolean excludeAutomaticAssertions;
    public GetDiseaseGenotypeAssociationsQueryParams withExcludeAutomaticAssertions(Boolean excludeAutomaticAssertions) {
        this.excludeAutomaticAssertions = excludeAutomaticAssertions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet")
    public Boolean facet;
    public GetDiseaseGenotypeAssociationsQueryParams withFacet(Boolean facet) {
        this.facet = facet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet_fields")
    public String[] facetFields;
    public GetDiseaseGenotypeAssociationsQueryParams withFacetFields(String[] facetFields) {
        this.facetFields = facetFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fetch_objects")
    public Boolean fetchObjects;
    public GetDiseaseGenotypeAssociationsQueryParams withFetchObjects(Boolean fetchObjects) {
        this.fetchObjects = fetchObjects;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetDiseaseGenotypeAssociationsQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=relation")
    public String relation;
    public GetDiseaseGenotypeAssociationsQueryParams withRelation(String relation) {
        this.relation = relation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Long rows;
    public GetDiseaseGenotypeAssociationsQueryParams withRows(Long rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=slim")
    public String[] slim;
    public GetDiseaseGenotypeAssociationsQueryParams withSlim(String[] slim) {
        this.slim = slim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetDiseaseGenotypeAssociationsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Long start;
    public GetDiseaseGenotypeAssociationsQueryParams withStart(Long start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taxon")
    public String[] taxon;
    public GetDiseaseGenotypeAssociationsQueryParams withTaxon(String[] taxon) {
        this.taxon = taxon;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unselect_evidence")
    public Boolean unselectEvidence;
    public GetDiseaseGenotypeAssociationsQueryParams withUnselectEvidence(Boolean unselectEvidence) {
        this.unselectEvidence = unselectEvidence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=use_compact_associations")
    public Boolean useCompactAssociations;
    public GetDiseaseGenotypeAssociationsQueryParams withUseCompactAssociations(Boolean useCompactAssociations) {
        this.useCompactAssociations = useCompactAssociations;
        return this;
    }
}