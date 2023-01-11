package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceUpdateServiceRequest {
    @SpeakeasyMetadata("form:name=CallbackUrl")
    public String callbackUrl;
    public UpdateServiceUpdateServiceRequest withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=ChatInstanceSid")
    public String chatInstanceSid;
    public UpdateServiceUpdateServiceRequest withChatInstanceSid(String chatInstanceSid) {
        this.chatInstanceSid = chatInstanceSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=DefaultTtl")
    public Long defaultTtl;
    public UpdateServiceUpdateServiceRequest withDefaultTtl(Long defaultTtl) {
        this.defaultTtl = defaultTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=GeoMatchLevel")
    public openapisdk.models.shared.ServiceEnumGeoMatchLevelEnum geoMatchLevel;
    public UpdateServiceUpdateServiceRequest withGeoMatchLevel(openapisdk.models.shared.ServiceEnumGeoMatchLevelEnum geoMatchLevel) {
        this.geoMatchLevel = geoMatchLevel;
        return this;
    }
    @SpeakeasyMetadata("form:name=InterceptCallbackUrl")
    public String interceptCallbackUrl;
    public UpdateServiceUpdateServiceRequest withInterceptCallbackUrl(String interceptCallbackUrl) {
        this.interceptCallbackUrl = interceptCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=NumberSelectionBehavior")
    public openapisdk.models.shared.ServiceEnumNumberSelectionBehaviorEnum numberSelectionBehavior;
    public UpdateServiceUpdateServiceRequest withNumberSelectionBehavior(openapisdk.models.shared.ServiceEnumNumberSelectionBehaviorEnum numberSelectionBehavior) {
        this.numberSelectionBehavior = numberSelectionBehavior;
        return this;
    }
    @SpeakeasyMetadata("form:name=OutOfSessionCallbackUrl")
    public String outOfSessionCallbackUrl;
    public UpdateServiceUpdateServiceRequest withOutOfSessionCallbackUrl(String outOfSessionCallbackUrl) {
        this.outOfSessionCallbackUrl = outOfSessionCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateServiceUpdateServiceRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}