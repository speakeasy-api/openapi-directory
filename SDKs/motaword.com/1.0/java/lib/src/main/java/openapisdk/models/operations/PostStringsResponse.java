package openapisdk.models.operations;



public class PostStringsResponse {
    public String contentType;
    public PostStringsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MachineTranslatedStrings machineTranslatedStrings;
    public PostStringsResponse withMachineTranslatedStrings(openapisdk.models.shared.MachineTranslatedStrings machineTranslatedStrings) {
        this.machineTranslatedStrings = machineTranslatedStrings;
        return this;
    }
    public Long statusCode;
    public PostStringsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}