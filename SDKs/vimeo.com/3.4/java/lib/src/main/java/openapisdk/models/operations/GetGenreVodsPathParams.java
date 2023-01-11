package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenreVodsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=genre_id")
    public String genreId;
    public GetGenreVodsPathParams withGenreId(String genreId) {
        this.genreId = genreId;
        return this;
    }
}