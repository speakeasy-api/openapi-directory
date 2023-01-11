package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersCreateTestOrderRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public OrdersCreateTestOrderRequest withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateName")
    public String templateName;
    public OrdersCreateTestOrderRequest withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testOrder")
    public TestOrder testOrder;
    public OrdersCreateTestOrderRequest withTestOrder(TestOrder testOrder) {
        this.testOrder = testOrder;
        return this;
    }
}