package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetListeNoireQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyid")
    public String keyid;
    public SetListeNoireQueryParams withKeyid(String keyid) {
        this.keyid = keyid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=num")
    public String num;
    public SetListeNoireQueryParams withNum(String num) {
        this.num = num;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setlisteNoire")
    public SetListeNoireSetlisteNoireEnum setlisteNoire;
    public SetListeNoireQueryParams withSetlisteNoire(SetListeNoireSetlisteNoireEnum setlisteNoire) {
        this.setlisteNoire = setlisteNoire;
        return this;
    }
}