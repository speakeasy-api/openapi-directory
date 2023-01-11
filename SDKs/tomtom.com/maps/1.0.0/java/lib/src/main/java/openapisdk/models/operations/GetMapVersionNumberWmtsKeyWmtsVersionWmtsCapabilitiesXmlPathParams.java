package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=wmtsVersion")
    public GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum wmtsVersion;
    public GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams withWmtsVersion(GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum wmtsVersion) {
        this.wmtsVersion = wmtsVersion;
        return this;
    }
}