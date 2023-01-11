package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PayorLinksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=descendantsOfPayor")
    public String descendantsOfPayor;
    public PayorLinksQueryParams withDescendantsOfPayor(String descendantsOfPayor) {
        this.descendantsOfPayor = descendantsOfPayor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public PayorLinksQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parentOfPayor")
    public String parentOfPayor;
    public PayorLinksQueryParams withParentOfPayor(String parentOfPayor) {
        this.parentOfPayor = parentOfPayor;
        return this;
    }
}