package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSplashLoginAttemptsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=loginIdentifier")
    public String loginIdentifier;
    public GetNetworkSplashLoginAttemptsQueryParams withLoginIdentifier(String loginIdentifier) {
        this.loginIdentifier = loginIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ssidNumber")
    public Long ssidNumber;
    public GetNetworkSplashLoginAttemptsQueryParams withSsidNumber(Long ssidNumber) {
        this.ssidNumber = ssidNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Long timespan;
    public GetNetworkSplashLoginAttemptsQueryParams withTimespan(Long timespan) {
        this.timespan = timespan;
        return this;
    }
}