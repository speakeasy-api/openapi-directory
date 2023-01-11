package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContactEnrichHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=galaxy-ap-name")
    public String galaxyApName;
    public PostContactEnrichHeaders withGalaxyApName(String galaxyApName) {
        this.galaxyApName = galaxyApName;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=galaxy-ap-password")
    public String galaxyApPassword;
    public PostContactEnrichHeaders withGalaxyApPassword(String galaxyApPassword) {
        this.galaxyApPassword = galaxyApPassword;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=galaxy-search-type")
    public String galaxySearchType;
    public PostContactEnrichHeaders withGalaxySearchType(String galaxySearchType) {
        this.galaxySearchType = galaxySearchType;
        return this;
    }
}