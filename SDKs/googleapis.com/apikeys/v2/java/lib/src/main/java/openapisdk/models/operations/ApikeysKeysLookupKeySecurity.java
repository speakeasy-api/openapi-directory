package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApikeysKeysLookupKeySecurity {
    @SpeakeasyMetadata("security:option=true")
    public ApikeysKeysLookupKeySecurityOption1 option1;
    public ApikeysKeysLookupKeySecurity withOption1(ApikeysKeysLookupKeySecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public ApikeysKeysLookupKeySecurityOption2 option2;
    public ApikeysKeysLookupKeySecurity withOption2(ApikeysKeysLookupKeySecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}