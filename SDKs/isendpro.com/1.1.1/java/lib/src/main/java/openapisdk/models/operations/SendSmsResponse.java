package openapisdk.models.operations;



public class SendSmsResponse {
    public String contentType;
    public SendSmsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Erreur erreur;
    public SendSmsResponse withErreur(openapisdk.models.shared.Erreur erreur) {
        this.erreur = erreur;
        return this;
    }
    public openapisdk.models.shared.SmsReponse smsReponse;
    public SendSmsResponse withSmsReponse(openapisdk.models.shared.SmsReponse smsReponse) {
        this.smsReponse = smsReponse;
        return this;
    }
    public Long statusCode;
    public SendSmsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}