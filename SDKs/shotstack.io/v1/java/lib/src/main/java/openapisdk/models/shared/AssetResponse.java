package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetResponse
 * The response returned by the Serve API [get asset](#get-asset) request. Includes details of a hosted video, image, audio file, thumbnail or poster image. The response follows the [json:api](https://jsonapi.org/) specification.
**/
public class AssetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public AssetResponseData data;
    public AssetResponse withData(AssetResponseData data) {
        this.data = data;
        return this;
    }
}