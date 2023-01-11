package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountStatusExampleItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public String itemId;
    public AccountStatusExampleItem withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public AccountStatusExampleItem withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submittedValue")
    public String submittedValue;
    public AccountStatusExampleItem withSubmittedValue(String submittedValue) {
        this.submittedValue = submittedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public AccountStatusExampleItem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueOnLandingPage")
    public String valueOnLandingPage;
    public AccountStatusExampleItem withValueOnLandingPage(String valueOnLandingPage) {
        this.valueOnLandingPage = valueOnLandingPage;
        return this;
    }
}