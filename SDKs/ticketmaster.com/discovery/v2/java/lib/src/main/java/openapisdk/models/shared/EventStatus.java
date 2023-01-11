package openapisdk.models.shared;



/**
 * EventStatus
 * Event's Status
**/
public class EventStatus {
    public EventStatusCodeEnum code;
    public EventStatus withCode(EventStatusCodeEnum code) {
        this.code = code;
        return this;
    }
}