package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExtractOntologySubgraphResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node")
    public String node;
    public GetExtractOntologySubgraphResourcePathParams withNode(String node) {
        this.node = node;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ontology")
    public String ontology;
    public GetExtractOntologySubgraphResourcePathParams withOntology(String ontology) {
        this.ontology = ontology;
        return this;
    }
}