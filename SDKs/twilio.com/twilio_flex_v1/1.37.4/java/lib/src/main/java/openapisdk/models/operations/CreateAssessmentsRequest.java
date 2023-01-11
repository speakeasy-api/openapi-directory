package openapisdk.models.operations;



public class CreateAssessmentsRequest {
    public String serverURL;
    public CreateAssessmentsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateAssessmentsSecurity security;
    public CreateAssessmentsRequest withSecurity(CreateAssessmentsSecurity security) {
        this.security = security;
        return this;
    }
}