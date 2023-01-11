package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ShortenLinkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cta")
    public Long cta;
    public ShortenLinkQueryParams withCta(Long cta) {
        this.cta = cta;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public ShortenLinkQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}