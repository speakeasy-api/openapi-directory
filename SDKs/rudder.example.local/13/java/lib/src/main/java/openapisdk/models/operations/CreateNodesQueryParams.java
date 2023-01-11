package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNodesQueryParams {
    @SpeakeasyMetadata("queryParam:serialization=json,name=Node parameters")
    public openapisdk.models.shared.NodeAdd[] nodeParameters;
    public CreateNodesQueryParams withNodeParameters(openapisdk.models.shared.NodeAdd[] nodeParameters) {
        this.nodeParameters = nodeParameters;
        return this;
    }
}