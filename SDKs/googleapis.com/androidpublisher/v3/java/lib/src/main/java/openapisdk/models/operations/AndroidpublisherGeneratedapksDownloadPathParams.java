package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroidpublisherGeneratedapksDownloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=downloadId")
    public String downloadId;
    public AndroidpublisherGeneratedapksDownloadPathParams withDownloadId(String downloadId) {
        this.downloadId = downloadId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packageName")
    public String packageName;
    public AndroidpublisherGeneratedapksDownloadPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionCode")
    public Long versionCode;
    public AndroidpublisherGeneratedapksDownloadPathParams withVersionCode(Long versionCode) {
        this.versionCode = versionCode;
        return this;
    }
}