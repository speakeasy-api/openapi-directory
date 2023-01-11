package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IntegratorCardPayloadResponse
 * The card details payload, sent to HubSpot by an app in response to a data fetch request when a user visits a CRM record page.
**/
public class IntegratorCardPayloadResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allItemsLinkUrl")
    public String allItemsLinkUrl;
    public IntegratorCardPayloadResponse withAllItemsLinkUrl(String allItemsLinkUrl) {
        this.allItemsLinkUrl = allItemsLinkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardLabel")
    public String cardLabel;
    public IntegratorCardPayloadResponse withCardLabel(String cardLabel) {
        this.cardLabel = cardLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseVersion")
    public IntegratorCardPayloadResponseResponseVersionEnum responseVersion;
    public IntegratorCardPayloadResponse withResponseVersion(IntegratorCardPayloadResponseResponseVersionEnum responseVersion) {
        this.responseVersion = responseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sections")
    public IntegratorObjectResult[] sections;
    public IntegratorCardPayloadResponse withSections(IntegratorObjectResult[] sections) {
        this.sections = sections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topLevelActions")
    public TopLevelActions topLevelActions;
    public IntegratorCardPayloadResponse withTopLevelActions(TopLevelActions topLevelActions) {
        this.topLevelActions = topLevelActions;
        return this;
    }
    @JsonProperty("totalCount")
    public Integer totalCount;
    public IntegratorCardPayloadResponse withTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}