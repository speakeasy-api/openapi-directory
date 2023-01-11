package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersGetTestOrderTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public OrdersGetTestOrderTemplateResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public TestOrder template;
    public OrdersGetTestOrderTemplateResponse withTemplate(TestOrder template) {
        this.template = template;
        return this;
    }
}