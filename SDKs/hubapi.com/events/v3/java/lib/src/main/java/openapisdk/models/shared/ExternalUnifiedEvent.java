package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ExternalUnifiedEvent
 * Used to represent any event. With this format, the `objectType` and `eventType` values are stringified CRM types. Example object:
 * <br/>
 * ```
 *  {
 *       "objectType": "CONTACT",
 *       "objectId": 208451632,
 *       "eventType": "e_visited_page",
 *       "occurredAt": 1567377501421,
 *       "id": "leviathan-be3335d3-46f1-3985-988e-ff38e6e7b9d8",
 *       "properties": {
 *           "hs_url": "https://some-website.com/",
 *           "hs_title": "Home",
 *           "hs_referrer": "https://some-other-website.com/blog/why-we-love-big-data-and-you-should-too",
 *           "hs_userAgent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36",
 *           "hs_city": "lund",
 *           "hs_region": "m",
 *           "hs_country": "se",
 *           "hs_session_id" : "leviathan-be3335d3-46f1-3985-988e-ff38e6e7b9d8",
 *           "hs_session_source" : "DIRECT"
 *       }
 *   }      
 * ```
**/
public class ExternalUnifiedEvent {
    @JsonProperty("eventType")
    public String eventType;
    public ExternalUnifiedEvent withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ExternalUnifiedEvent withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("objectId")
    public String objectId;
    public ExternalUnifiedEvent withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @JsonProperty("objectType")
    public String objectType;
    public ExternalUnifiedEvent withObjectType(String objectType) {
        this.objectType = objectType;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("occurredAt")
    public OffsetDateTime occurredAt;
    public ExternalUnifiedEvent withOccurredAt(OffsetDateTime occurredAt) {
        this.occurredAt = occurredAt;
        return this;
    }
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public ExternalUnifiedEvent withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
}