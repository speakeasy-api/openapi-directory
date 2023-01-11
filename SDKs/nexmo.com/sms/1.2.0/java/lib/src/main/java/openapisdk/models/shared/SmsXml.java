package openapisdk.models.shared;



/**
 * SmsXml
 * Message sent
**/
public class SmsXml {
    public Message[] messages;
    public SmsXml withMessages(Message[] messages) {
        this.messages = messages;
        return this;
    }
}