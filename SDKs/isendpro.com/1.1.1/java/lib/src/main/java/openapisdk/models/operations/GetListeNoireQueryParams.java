package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListeNoireQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=getListeNoire")
    public GetListeNoireGetListeNoireEnum getListeNoire;
    public GetListeNoireQueryParams withGetListeNoire(GetListeNoireGetListeNoireEnum getListeNoire) {
        this.getListeNoire = getListeNoire;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyid")
    public String keyid;
    public GetListeNoireQueryParams withKeyid(String keyid) {
        this.keyid = keyid;
        return this;
    }
}