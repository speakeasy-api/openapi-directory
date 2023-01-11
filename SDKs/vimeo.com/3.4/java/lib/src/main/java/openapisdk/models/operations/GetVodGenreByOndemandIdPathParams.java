package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodGenreByOndemandIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=genre_id")
    public String genreId;
    public GetVodGenreByOndemandIdPathParams withGenreId(String genreId) {
        this.genreId = genreId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetVodGenreByOndemandIdPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}