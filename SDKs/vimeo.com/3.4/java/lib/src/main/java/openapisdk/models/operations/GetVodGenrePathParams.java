package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodGenrePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=genre_id")
    public String genreId;
    public GetVodGenrePathParams withGenreId(String genreId) {
        this.genreId = genreId;
        return this;
    }
}