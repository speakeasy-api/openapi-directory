package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProjectRequestsInput {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public UpdateProjectRequestsInput withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProjectInput project;
    public UpdateProjectRequestsInput withProject(openapisdk.models.shared.ProjectInput project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.ProjectInput project1;
    public UpdateProjectRequestsInput withProject1(openapisdk.models.shared.ProjectInput project1) {
        this.project1 = project1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ProjectInput project2;
    public UpdateProjectRequestsInput withProject2(openapisdk.models.shared.ProjectInput project2) {
        this.project2 = project2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public UpdateProjectRequestsInput withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
}