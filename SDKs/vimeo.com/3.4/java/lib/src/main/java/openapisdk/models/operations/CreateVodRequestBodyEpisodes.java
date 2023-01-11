package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodRequestBodyEpisodes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buy")
    public CreateVodRequestBodyEpisodesBuy buy;
    public CreateVodRequestBodyEpisodes withBuy(CreateVodRequestBodyEpisodesBuy buy) {
        this.buy = buy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rent")
    public CreateVodRequestBodyEpisodesRent rent;
    public CreateVodRequestBodyEpisodes withRent(CreateVodRequestBodyEpisodesRent rent) {
        this.rent = rent;
        return this;
    }
}