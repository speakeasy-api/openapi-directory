package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEdgeResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=depth")
    public Long depth;
    public GetEdgeResourceQueryParams withDepth(Long depth) {
        this.depth = depth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetEdgeResourceDirectionEnum direction;
    public GetEdgeResourceQueryParams withDirection(GetEdgeResourceDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entail")
    public Boolean entail;
    public GetEdgeResourceQueryParams withEntail(Boolean entail) {
        this.entail = entail;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=graph")
    public GetEdgeResourceGraphEnum graph;
    public GetEdgeResourceQueryParams withGraph(GetEdgeResourceGraphEnum graph) {
        this.graph = graph;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=relationship_type")
    public String[] relationshipType;
    public GetEdgeResourceQueryParams withRelationshipType(String[] relationshipType) {
        this.relationshipType = relationshipType;
        return this;
    }
}