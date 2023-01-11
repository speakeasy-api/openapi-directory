package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVodGenrePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=genre_id")
    public String genreId;
    public AddVodGenrePathParams withGenreId(String genreId) {
        this.genreId = genreId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public AddVodGenrePathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
}