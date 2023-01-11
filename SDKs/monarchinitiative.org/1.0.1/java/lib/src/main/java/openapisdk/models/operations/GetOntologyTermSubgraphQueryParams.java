package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOntologyTermSubgraphQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cnode")
    public String[] cnode;
    public GetOntologyTermSubgraphQueryParams withCnode(String[] cnode) {
        this.cnode = cnode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_ancestors")
    public Boolean includeAncestors;
    public GetOntologyTermSubgraphQueryParams withIncludeAncestors(Boolean includeAncestors) {
        this.includeAncestors = includeAncestors;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_descendants")
    public Boolean includeDescendants;
    public GetOntologyTermSubgraphQueryParams withIncludeDescendants(Boolean includeDescendants) {
        this.includeDescendants = includeDescendants;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_meta")
    public Boolean includeMeta;
    public GetOntologyTermSubgraphQueryParams withIncludeMeta(Boolean includeMeta) {
        this.includeMeta = includeMeta;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=relation")
    public String[] relation;
    public GetOntologyTermSubgraphQueryParams withRelation(String[] relation) {
        this.relation = relation;
        return this;
    }
}