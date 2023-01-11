package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideosToProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uris")
    public String uris;
    public AddVideosToProjectQueryParams withUris(String uris) {
        this.uris = uris;
        return this;
    }
}