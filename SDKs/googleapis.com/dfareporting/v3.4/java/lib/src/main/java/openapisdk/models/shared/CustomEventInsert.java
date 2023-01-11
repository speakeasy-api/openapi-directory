package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomEventInsert
 * Custom event to be inserted.
**/
public class CustomEventInsert {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmDimensions")
    public CampaignManagerIds cmDimensions;
    public CustomEventInsert withCmDimensions(CampaignManagerIds cmDimensions) {
        this.cmDimensions = cmDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dv3Dimensions")
    public Dv3Ids dv3Dimensions;
    public CustomEventInsert withDv3Dimensions(Dv3Ids dv3Dimensions) {
        this.dv3Dimensions = dv3Dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertEventType")
    public CustomEventInsertInsertEventTypeEnum insertEventType;
    public CustomEventInsert withInsertEventType(CustomEventInsertInsertEventTypeEnum insertEventType) {
        this.insertEventType = insertEventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CustomEventInsert withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchId")
    public String matchId;
    public CustomEventInsert withMatchId(String matchId) {
        this.matchId = matchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileDeviceId")
    public String mobileDeviceId;
    public CustomEventInsert withMobileDeviceId(String mobileDeviceId) {
        this.mobileDeviceId = mobileDeviceId;
        return this;
    }
}