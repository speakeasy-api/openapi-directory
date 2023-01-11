package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPhoneEnrichHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=galaxy-ap-name")
    public String galaxyApName;
    public PostPhoneEnrichHeaders withGalaxyApName(String galaxyApName) {
        this.galaxyApName = galaxyApName;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=galaxy-ap-password")
    public String galaxyApPassword;
    public PostPhoneEnrichHeaders withGalaxyApPassword(String galaxyApPassword) {
        this.galaxyApPassword = galaxyApPassword;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=galaxy-search-type")
    public String galaxySearchType;
    public PostPhoneEnrichHeaders withGalaxySearchType(String galaxySearchType) {
        this.galaxySearchType = galaxySearchType;
        return this;
    }
}