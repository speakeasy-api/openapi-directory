package openapisdk.models.operations;



public class GetVaccineStatusResponse {
    public String contentType;
    public GetVaccineStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Problem problem;
    public GetVaccineStatusResponse withProblem(openapisdk.models.shared.Problem problem) {
        this.problem = problem;
        return this;
    }
    public Long statusCode;
    public GetVaccineStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VaccineResponse vaccineResponse;
    public GetVaccineStatusResponse withVaccineResponse(openapisdk.models.shared.VaccineResponse vaccineResponse) {
        this.vaccineResponse = vaccineResponse;
        return this;
    }
}