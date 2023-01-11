package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListsBestSellersHistoryJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=age-group")
    public String ageGroup;
    public GetListsBestSellersHistoryJsonQueryParams withAgeGroup(String ageGroup) {
        this.ageGroup = ageGroup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=author")
    public String author;
    public GetListsBestSellersHistoryJsonQueryParams withAuthor(String author) {
        this.author = author;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor")
    public String contributor;
    public GetListsBestSellersHistoryJsonQueryParams withContributor(String contributor) {
        this.contributor = contributor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isbn")
    public String isbn;
    public GetListsBestSellersHistoryJsonQueryParams withIsbn(String isbn) {
        this.isbn = isbn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=price")
    public String price;
    public GetListsBestSellersHistoryJsonQueryParams withPrice(String price) {
        this.price = price;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=publisher")
    public String publisher;
    public GetListsBestSellersHistoryJsonQueryParams withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=title")
    public String title;
    public GetListsBestSellersHistoryJsonQueryParams withTitle(String title) {
        this.title = title;
        return this;
    }
}