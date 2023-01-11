package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesMediaIdEmbedJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=displayMethod")
    public String displayMethod;
    public GetResourcesMediaIdEmbedJsonQueryParams withDisplayMethod(String displayMethod) {
        this.displayMethod = displayMethod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=divId")
    public String divId;
    public GetResourcesMediaIdEmbedJsonQueryParams withDivId(String divId) {
        this.divId = divId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=excludeDiv")
    public Boolean excludeDiv;
    public GetResourcesMediaIdEmbedJsonQueryParams withExcludeDiv(Boolean excludeDiv) {
        this.excludeDiv = excludeDiv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=excludeJquery")
    public Boolean excludeJquery;
    public GetResourcesMediaIdEmbedJsonQueryParams withExcludeJquery(Boolean excludeJquery) {
        this.excludeJquery = excludeJquery;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=flavor")
    public String flavor;
    public GetResourcesMediaIdEmbedJsonQueryParams withFlavor(String flavor) {
        this.flavor = flavor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=height")
    public Integer height;
    public GetResourcesMediaIdEmbedJsonQueryParams withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=iframeName")
    public String iframeName;
    public GetResourcesMediaIdEmbedJsonQueryParams withIframeName(String iframeName) {
        this.iframeName = iframeName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=width")
    public Integer width;
    public GetResourcesMediaIdEmbedJsonQueryParams withWidth(Integer width) {
        this.width = width;
        return this;
    }
}