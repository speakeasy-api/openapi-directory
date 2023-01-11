package openapisdk.models.operations;



public class CreateSmsCommandResponse {
    public String contentType;
    public CreateSmsCommandResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSmsCommandResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1SmsCommand supersimV1SmsCommand;
    public CreateSmsCommandResponse withSupersimV1SmsCommand(openapisdk.models.shared.SupersimV1SmsCommand supersimV1SmsCommand) {
        this.supersimV1SmsCommand = supersimV1SmsCommand;
        return this;
    }
}