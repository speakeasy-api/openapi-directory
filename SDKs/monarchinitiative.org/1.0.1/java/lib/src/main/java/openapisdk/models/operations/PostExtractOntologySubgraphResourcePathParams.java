package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostExtractOntologySubgraphResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node")
    public String node;
    public PostExtractOntologySubgraphResourcePathParams withNode(String node) {
        this.node = node;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ontology")
    public String ontology;
    public PostExtractOntologySubgraphResourcePathParams withOntology(String ontology) {
        this.ontology = ontology;
        return this;
    }
}