package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReviewsSearchJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=critics-pick")
    public GetReviewsSearchJsonCriticsPickEnum criticsPick;
    public GetReviewsSearchJsonQueryParams withCriticsPick(GetReviewsSearchJsonCriticsPickEnum criticsPick) {
        this.criticsPick = criticsPick;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetReviewsSearchJsonQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opening-date")
    public String openingDate;
    public GetReviewsSearchJsonQueryParams withOpeningDate(String openingDate) {
        this.openingDate = openingDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public String order;
    public GetReviewsSearchJsonQueryParams withOrder(String order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=publication-date")
    public String publicationDate;
    public GetReviewsSearchJsonQueryParams withPublicationDate(String publicationDate) {
        this.publicationDate = publicationDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetReviewsSearchJsonQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reviewer")
    public String reviewer;
    public GetReviewsSearchJsonQueryParams withReviewer(String reviewer) {
        this.reviewer = reviewer;
        return this;
    }
}