package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsGenerateAccountNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessAccountsGenerateAccountNumberPathParams withName(String name) {
        this.name = name;
        return this;
    }
}