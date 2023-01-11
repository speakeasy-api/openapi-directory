package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPhenotypeDiseaseAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direct")
    public Boolean direct;
    public GetPhenotypeDiseaseAssociationsQueryParams withDirect(Boolean direct) {
        this.direct = direct;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direct_taxon")
    public Boolean directTaxon;
    public GetPhenotypeDiseaseAssociationsQueryParams withDirectTaxon(Boolean directTaxon) {
        this.directTaxon = directTaxon;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=evidence")
    public String evidence;
    public GetPhenotypeDiseaseAssociationsQueryParams withEvidence(String evidence) {
        this.evidence = evidence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_automatic_assertions")
    public Boolean excludeAutomaticAssertions;
    public GetPhenotypeDiseaseAssociationsQueryParams withExcludeAutomaticAssertions(Boolean excludeAutomaticAssertions) {
        this.excludeAutomaticAssertions = excludeAutomaticAssertions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet")
    public Boolean facet;
    public GetPhenotypeDiseaseAssociationsQueryParams withFacet(Boolean facet) {
        this.facet = facet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet_fields")
    public String[] facetFields;
    public GetPhenotypeDiseaseAssociationsQueryParams withFacetFields(String[] facetFields) {
        this.facetFields = facetFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fetch_objects")
    public Boolean fetchObjects;
    public GetPhenotypeDiseaseAssociationsQueryParams withFetchObjects(Boolean fetchObjects) {
        this.fetchObjects = fetchObjects;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetPhenotypeDiseaseAssociationsQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=relation")
    public String relation;
    public GetPhenotypeDiseaseAssociationsQueryParams withRelation(String relation) {
        this.relation = relation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Long rows;
    public GetPhenotypeDiseaseAssociationsQueryParams withRows(Long rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=slim")
    public String[] slim;
    public GetPhenotypeDiseaseAssociationsQueryParams withSlim(String[] slim) {
        this.slim = slim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetPhenotypeDiseaseAssociationsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Long start;
    public GetPhenotypeDiseaseAssociationsQueryParams withStart(Long start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taxon")
    public String[] taxon;
    public GetPhenotypeDiseaseAssociationsQueryParams withTaxon(String[] taxon) {
        this.taxon = taxon;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unselect_evidence")
    public Boolean unselectEvidence;
    public GetPhenotypeDiseaseAssociationsQueryParams withUnselectEvidence(Boolean unselectEvidence) {
        this.unselectEvidence = unselectEvidence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=use_compact_associations")
    public Boolean useCompactAssociations;
    public GetPhenotypeDiseaseAssociationsQueryParams withUseCompactAssociations(Boolean useCompactAssociations) {
        this.useCompactAssociations = useCompactAssociations;
        return this;
    }
}