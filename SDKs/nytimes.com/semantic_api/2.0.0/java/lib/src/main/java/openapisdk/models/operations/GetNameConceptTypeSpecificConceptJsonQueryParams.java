package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNameConceptTypeSpecificConceptJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public GetNameConceptTypeSpecificConceptJsonFieldsEnum fields;
    public GetNameConceptTypeSpecificConceptJsonQueryParams withFields(GetNameConceptTypeSpecificConceptJsonFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetNameConceptTypeSpecificConceptJsonQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}