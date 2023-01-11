package openapisdk.models.operations;



public class PhoneCodeGeoRequest {
    public PhoneCodeGeoPathParams pathParams;
    public PhoneCodeGeoRequest withPathParams(PhoneCodeGeoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PhoneCodeGeoSecurity security;
    public PhoneCodeGeoRequest withSecurity(PhoneCodeGeoSecurity security) {
        this.security = security;
        return this;
    }
}