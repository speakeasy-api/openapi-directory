package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPublicationPhenotypeAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direct")
    public Boolean direct;
    public GetPublicationPhenotypeAssociationsQueryParams withDirect(Boolean direct) {
        this.direct = direct;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direct_taxon")
    public Boolean directTaxon;
    public GetPublicationPhenotypeAssociationsQueryParams withDirectTaxon(Boolean directTaxon) {
        this.directTaxon = directTaxon;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=evidence")
    public String evidence;
    public GetPublicationPhenotypeAssociationsQueryParams withEvidence(String evidence) {
        this.evidence = evidence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_automatic_assertions")
    public Boolean excludeAutomaticAssertions;
    public GetPublicationPhenotypeAssociationsQueryParams withExcludeAutomaticAssertions(Boolean excludeAutomaticAssertions) {
        this.excludeAutomaticAssertions = excludeAutomaticAssertions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet")
    public Boolean facet;
    public GetPublicationPhenotypeAssociationsQueryParams withFacet(Boolean facet) {
        this.facet = facet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet_fields")
    public String[] facetFields;
    public GetPublicationPhenotypeAssociationsQueryParams withFacetFields(String[] facetFields) {
        this.facetFields = facetFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fetch_objects")
    public Boolean fetchObjects;
    public GetPublicationPhenotypeAssociationsQueryParams withFetchObjects(Boolean fetchObjects) {
        this.fetchObjects = fetchObjects;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetPublicationPhenotypeAssociationsQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=relation")
    public String relation;
    public GetPublicationPhenotypeAssociationsQueryParams withRelation(String relation) {
        this.relation = relation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Long rows;
    public GetPublicationPhenotypeAssociationsQueryParams withRows(Long rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=slim")
    public String[] slim;
    public GetPublicationPhenotypeAssociationsQueryParams withSlim(String[] slim) {
        this.slim = slim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetPublicationPhenotypeAssociationsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Long start;
    public GetPublicationPhenotypeAssociationsQueryParams withStart(Long start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taxon")
    public String[] taxon;
    public GetPublicationPhenotypeAssociationsQueryParams withTaxon(String[] taxon) {
        this.taxon = taxon;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unselect_evidence")
    public Boolean unselectEvidence;
    public GetPublicationPhenotypeAssociationsQueryParams withUnselectEvidence(Boolean unselectEvidence) {
        this.unselectEvidence = unselectEvidence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=use_compact_associations")
    public Boolean useCompactAssociations;
    public GetPublicationPhenotypeAssociationsQueryParams withUseCompactAssociations(Boolean useCompactAssociations) {
        this.useCompactAssociations = useCompactAssociations;
        return this;
    }
}