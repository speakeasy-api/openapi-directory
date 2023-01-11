package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddVideoToVodRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buy")
    public AddVideoToVodRequestBodyBuy buy;
    public AddVideoToVodRequestBody withBuy(AddVideoToVodRequestBodyBuy buy) {
        this.buy = buy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Double position;
    public AddVideoToVodRequestBody withPosition(Double position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_year")
    public Double releaseYear;
    public AddVideoToVodRequestBody withReleaseYear(Double releaseYear) {
        this.releaseYear = releaseYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rent")
    public AddVideoToVodRequestBodyRent rent;
    public AddVideoToVodRequestBody withRent(AddVideoToVodRequestBodyRent rent) {
        this.rent = rent;
        return this;
    }
    @JsonProperty("type")
    public AddVideoToVodRequestBodyTypeEnum type;
    public AddVideoToVodRequestBody withType(AddVideoToVodRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}