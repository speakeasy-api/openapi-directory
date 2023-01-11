package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOverRepresentationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=background")
    public String[] background;
    public GetOverRepresentationQueryParams withBackground(String[] background) {
        this.background = background;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_p_value")
    public String maxPValue;
    public GetOverRepresentationQueryParams withMaxPValue(String maxPValue) {
        this.maxPValue = maxPValue;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=object_category")
    public String objectCategory;
    public GetOverRepresentationQueryParams withObjectCategory(String objectCategory) {
        this.objectCategory = objectCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ontology")
    public String ontology;
    public GetOverRepresentationQueryParams withOntology(String ontology) {
        this.ontology = ontology;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subject")
    public String[] subject;
    public GetOverRepresentationQueryParams withSubject(String[] subject) {
        this.subject = subject;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subject_category")
    public String subjectCategory;
    public GetOverRepresentationQueryParams withSubjectCategory(String subjectCategory) {
        this.subjectCategory = subjectCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taxon")
    public String taxon;
    public GetOverRepresentationQueryParams withTaxon(String taxon) {
        this.taxon = taxon;
        return this;
    }
}