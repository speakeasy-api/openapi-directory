package openapisdk.models.operations;



public class FcmdataProjectsAndroidAppsDeliveryDataListResponse {
    public String contentType;
    public FcmdataProjectsAndroidAppsDeliveryDataListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse googleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse;
    public FcmdataProjectsAndroidAppsDeliveryDataListResponse withGoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse(openapisdk.models.shared.GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse googleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse) {
        this.googleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse = googleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse;
        return this;
    }
    public Long statusCode;
    public FcmdataProjectsAndroidAppsDeliveryDataListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}