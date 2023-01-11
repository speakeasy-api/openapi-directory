package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeFullControllers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public NodeFullControllers withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public String manufacturer;
    public NodeFullControllers withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NodeFullControllers withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Long quantity;
    public NodeFullControllers withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public NodeFullControllers withType(String type) {
        this.type = type;
        return this;
    }
}