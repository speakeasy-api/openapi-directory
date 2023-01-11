package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodAlt1RequestBodyEpisodesBuy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateVodAlt1RequestBodyEpisodesBuy withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public CreateVodAlt1RequestBodyEpisodesBuy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public CreateVodAlt1RequestBodyEpisodesBuyPrice price;
    public CreateVodAlt1RequestBodyEpisodesBuy withPrice(CreateVodAlt1RequestBodyEpisodesBuyPrice price) {
        this.price = price;
        return this;
    }
}