package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Form
 * A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
**/
public class Form {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formId")
    public String formId;
    public Form withFormId(String formId) {
        this.formId = formId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public Info info;
    public Form withInfo(Info info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Item[] items;
    public Form withItems(Item[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedSheetId")
    public String linkedSheetId;
    public Form withLinkedSheetId(String linkedSheetId) {
        this.linkedSheetId = linkedSheetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responderUri")
    public String responderUri;
    public Form withResponderUri(String responderUri) {
        this.responderUri = responderUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public Form withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public FormSettings settings;
    public Form withSettings(FormSettings settings) {
        this.settings = settings;
        return this;
    }
}