package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetRenderResponse
 * The response returned by the Serve API [get asset by render id](#get-asset-by-render-id) request. The response  is an array of asset resources, including video, image, audio, thumbnail and poster image. The response follows  the [json:api](https://jsonapi.org/) specification.
**/
public class AssetRenderResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public AssetResponseData[] data;
    public AssetRenderResponse withData(AssetResponseData[] data) {
        this.data = data;
        return this;
    }
}