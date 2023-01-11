package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class PayorLogoRequestLogo {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PayorLogoRequestLogo withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=logo")
    public String logo;
    public PayorLogoRequestLogo withLogo(String logo) {
        this.logo = logo;
        return this;
    }
}