package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DelListeNoireQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=delListeNoire")
    public DelListeNoireDelListeNoireEnum delListeNoire;
    public DelListeNoireQueryParams withDelListeNoire(DelListeNoireDelListeNoireEnum delListeNoire) {
        this.delListeNoire = delListeNoire;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyid")
    public String keyid;
    public DelListeNoireQueryParams withKeyid(String keyid) {
        this.keyid = keyid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=num")
    public String num;
    public DelListeNoireQueryParams withNum(String num) {
        this.num = num;
        return this;
    }
}