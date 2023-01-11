package openapisdk.models.operations;



public class MbusApiResponse {
    public String contentType;
    public MbusApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MbusApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String textError;
    public MbusApiResponse withTextError(String textError) {
        this.textError = textError;
        return this;
    }
    public String yaml;
    public MbusApiResponse withYaml(String yaml) {
        this.yaml = yaml;
        return this;
    }
}