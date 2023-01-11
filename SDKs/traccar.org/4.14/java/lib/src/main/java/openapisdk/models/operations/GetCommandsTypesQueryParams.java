package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommandsTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceId")
    public Long deviceId;
    public GetCommandsTypesQueryParams withDeviceId(Long deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=protocol")
    public String protocol;
    public GetCommandsTypesQueryParams withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=textChannel")
    public Boolean textChannel;
    public GetCommandsTypesQueryParams withTextChannel(Boolean textChannel) {
        this.textChannel = textChannel;
        return this;
    }
}