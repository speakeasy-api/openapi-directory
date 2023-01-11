package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class PayorLogoRequest {
    @SpeakeasyMetadata("multipartForm:file")
    public PayorLogoRequestLogo logo;
    public PayorLogoRequest withLogo(PayorLogoRequestLogo logo) {
        this.logo = logo;
        return this;
    }
}