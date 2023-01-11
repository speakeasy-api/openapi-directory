package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostExtractOntologySubgraphResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cnode")
    public String[] cnode;
    public PostExtractOntologySubgraphResourceQueryParams withCnode(String[] cnode) {
        this.cnode = cnode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_ancestors")
    public Boolean includeAncestors;
    public PostExtractOntologySubgraphResourceQueryParams withIncludeAncestors(Boolean includeAncestors) {
        this.includeAncestors = includeAncestors;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_descendants")
    public Boolean includeDescendants;
    public PostExtractOntologySubgraphResourceQueryParams withIncludeDescendants(Boolean includeDescendants) {
        this.includeDescendants = includeDescendants;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_meta")
    public Boolean includeMeta;
    public PostExtractOntologySubgraphResourceQueryParams withIncludeMeta(Boolean includeMeta) {
        this.includeMeta = includeMeta;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=relation")
    public String[] relation;
    public PostExtractOntologySubgraphResourceQueryParams withRelation(String[] relation) {
        this.relation = relation;
        return this;
    }
}