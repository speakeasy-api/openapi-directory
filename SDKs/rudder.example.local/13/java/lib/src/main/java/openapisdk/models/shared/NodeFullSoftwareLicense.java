package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeFullSoftwareLicense
 * Information about the license
**/
public class NodeFullSoftwareLicense {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public NodeFullSoftwareLicense withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationDate")
    public LocalDate expirationDate;
    public NodeFullSoftwareLicense withExpirationDate(LocalDate expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NodeFullSoftwareLicense withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oem")
    public String oem;
    public NodeFullSoftwareLicense withOem(String oem) {
        this.oem = oem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public NodeFullSoftwareLicense withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productKey")
    public String productKey;
    public NodeFullSoftwareLicense withProductKey(String productKey) {
        this.productKey = productKey;
        return this;
    }
}