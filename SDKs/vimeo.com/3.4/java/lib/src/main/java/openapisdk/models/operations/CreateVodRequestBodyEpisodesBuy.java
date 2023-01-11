package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodRequestBodyEpisodesBuy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateVodRequestBodyEpisodesBuy withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public CreateVodRequestBodyEpisodesBuy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public CreateVodRequestBodyEpisodesBuyPrice price;
    public CreateVodRequestBodyEpisodesBuy withPrice(CreateVodRequestBodyEpisodesBuyPrice price) {
        this.price = price;
        return this;
    }
}