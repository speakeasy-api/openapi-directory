package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageChannelsStopSecurity {
    @SpeakeasyMetadata("security:option=true")
    public StorageChannelsStopSecurityOption1 option1;
    public StorageChannelsStopSecurity withOption1(StorageChannelsStopSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageChannelsStopSecurityOption2 option2;
    public StorageChannelsStopSecurity withOption2(StorageChannelsStopSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public StorageChannelsStopSecurityOption3 option3;
    public StorageChannelsStopSecurity withOption3(StorageChannelsStopSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}