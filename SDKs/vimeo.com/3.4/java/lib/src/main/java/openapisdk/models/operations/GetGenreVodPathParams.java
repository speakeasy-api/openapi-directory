package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenreVodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=genre_id")
    public String genreId;
    public GetGenreVodPathParams withGenreId(String genreId) {
        this.genreId = genreId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetGenreVodPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}