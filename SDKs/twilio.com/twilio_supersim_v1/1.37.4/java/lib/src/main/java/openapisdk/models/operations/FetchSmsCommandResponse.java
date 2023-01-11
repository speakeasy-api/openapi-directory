package openapisdk.models.operations;



public class FetchSmsCommandResponse {
    public String contentType;
    public FetchSmsCommandResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSmsCommandResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1SmsCommand supersimV1SmsCommand;
    public FetchSmsCommandResponse withSupersimV1SmsCommand(openapisdk.models.shared.SupersimV1SmsCommand supersimV1SmsCommand) {
        this.supersimV1SmsCommand = supersimV1SmsCommand;
        return this;
    }
}