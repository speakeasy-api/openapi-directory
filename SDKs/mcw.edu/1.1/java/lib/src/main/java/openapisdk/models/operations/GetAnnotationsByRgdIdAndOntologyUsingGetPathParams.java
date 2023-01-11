package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnnotationsByRgdIdAndOntologyUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ontologyPrefix")
    public String ontologyPrefix;
    public GetAnnotationsByRgdIdAndOntologyUsingGetPathParams withOntologyPrefix(String ontologyPrefix) {
        this.ontologyPrefix = ontologyPrefix;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rgdId")
    public Integer rgdId;
    public GetAnnotationsByRgdIdAndOntologyUsingGetPathParams withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
}