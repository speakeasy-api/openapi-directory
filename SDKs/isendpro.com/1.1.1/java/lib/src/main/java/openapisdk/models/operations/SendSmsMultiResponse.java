package openapisdk.models.operations;



public class SendSmsMultiResponse {
    public String contentType;
    public SendSmsMultiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Erreur erreur;
    public SendSmsMultiResponse withErreur(openapisdk.models.shared.Erreur erreur) {
        this.erreur = erreur;
        return this;
    }
    public openapisdk.models.shared.SmsReponse smsReponse;
    public SendSmsMultiResponse withSmsReponse(openapisdk.models.shared.SmsReponse smsReponse) {
        this.smsReponse = smsReponse;
        return this;
    }
    public Long statusCode;
    public SendSmsMultiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}