package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodRequestBodyBuy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateVodRequestBodyBuy withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public CreateVodRequestBodyBuy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public CreateVodRequestBodyBuyPrice price;
    public CreateVodRequestBodyBuy withPrice(CreateVodRequestBodyBuyPrice price) {
        this.price = price;
        return this;
    }
}