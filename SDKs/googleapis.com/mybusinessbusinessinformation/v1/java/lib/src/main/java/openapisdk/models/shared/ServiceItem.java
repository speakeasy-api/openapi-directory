package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceItem
 * A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service.
**/
public class ServiceItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeFormServiceItem")
    public FreeFormServiceItem freeFormServiceItem;
    public ServiceItem withFreeFormServiceItem(FreeFormServiceItem freeFormServiceItem) {
        this.freeFormServiceItem = freeFormServiceItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Money price;
    public ServiceItem withPrice(Money price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("structuredServiceItem")
    public StructuredServiceItem structuredServiceItem;
    public ServiceItem withStructuredServiceItem(StructuredServiceItem structuredServiceItem) {
        this.structuredServiceItem = structuredServiceItem;
        return this;
    }
}