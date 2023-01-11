package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideosToProjectAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uris")
    public String uris;
    public AddVideosToProjectAlt1QueryParams withUris(String uris) {
        this.uris = uris;
        return this;
    }
}