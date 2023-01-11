package openapisdk.models.shared;



/**
 * ErrorXml
 * Error
**/
public class ErrorXml {
    public ErrorMessage[] messages;
    public ErrorXml withMessages(ErrorMessage[] messages) {
        this.messages = messages;
        return this;
    }
}