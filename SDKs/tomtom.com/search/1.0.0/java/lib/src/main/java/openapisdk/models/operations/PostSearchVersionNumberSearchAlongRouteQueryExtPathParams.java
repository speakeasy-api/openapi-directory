package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSearchVersionNumberSearchAlongRouteQueryExtPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ext")
    public openapisdk.models.shared.ExtEnum ext;
    public PostSearchVersionNumberSearchAlongRouteQueryExtPathParams withExt(openapisdk.models.shared.ExtEnum ext) {
        this.ext = ext;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=query")
    public String query;
    public PostSearchVersionNumberSearchAlongRouteQueryExtPathParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public PostSearchVersionNumberSearchAlongRouteQueryExtPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}