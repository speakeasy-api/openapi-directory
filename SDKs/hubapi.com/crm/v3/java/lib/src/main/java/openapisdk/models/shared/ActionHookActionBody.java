package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionHookActionBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmation")
    public ActionConfirmationBody confirmation;
    public ActionHookActionBody withConfirmation(ActionConfirmationBody confirmation) {
        this.confirmation = confirmation;
        return this;
    }
    @JsonProperty("httpMethod")
    public ActionHookActionBodyHttpMethodEnum httpMethod;
    public ActionHookActionBody withHttpMethod(ActionHookActionBodyHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public ActionHookActionBody withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("propertyNamesIncluded")
    public String[] propertyNamesIncluded;
    public ActionHookActionBody withPropertyNamesIncluded(String[] propertyNamesIncluded) {
        this.propertyNamesIncluded = propertyNamesIncluded;
        return this;
    }
    @JsonProperty("type")
    public ActionHookActionBodyTypeEnum type;
    public ActionHookActionBody withType(ActionHookActionBodyTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ActionHookActionBody withUrl(String url) {
        this.url = url;
        return this;
    }
}