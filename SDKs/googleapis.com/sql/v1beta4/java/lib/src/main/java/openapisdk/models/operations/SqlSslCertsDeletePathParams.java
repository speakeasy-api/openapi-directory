package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlSslCertsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public SqlSslCertsDeletePathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public SqlSslCertsDeletePathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sha1Fingerprint")
    public String sha1Fingerprint;
    public SqlSslCertsDeletePathParams withSha1Fingerprint(String sha1Fingerprint) {
        this.sha1Fingerprint = sha1Fingerprint;
        return this;
    }
}