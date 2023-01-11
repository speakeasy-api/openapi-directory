package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSshKeysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fingerprint")
    public String fingerprint;
    public GetSshKeysQueryParams withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label_selector")
    public String labelSelector;
    public GetSshKeysQueryParams withLabelSelector(String labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetSshKeysQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetSshKeysSortEnum sort;
    public GetSshKeysQueryParams withSort(GetSshKeysSortEnum sort) {
        this.sort = sort;
        return this;
    }
}