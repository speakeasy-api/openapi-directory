package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHealthQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bundles")
    public Boolean bundles;
    public GetHealthQueryParams withBundles(Boolean bundles) {
        this.bundles = bundles;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=plugins")
    public Boolean plugins;
    public GetHealthQueryParams withPlugins(Boolean plugins) {
        this.plugins = plugins;
        return this;
    }
}