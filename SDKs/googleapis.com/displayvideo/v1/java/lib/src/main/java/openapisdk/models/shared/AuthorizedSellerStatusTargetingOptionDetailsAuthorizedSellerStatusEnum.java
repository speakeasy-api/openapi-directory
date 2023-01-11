package openapisdk.models.shared;


public enum AuthorizedSellerStatusTargetingOptionDetailsAuthorizedSellerStatusEnum {
    AUTHORIZED_SELLER_STATUS_UNSPECIFIED("AUTHORIZED_SELLER_STATUS_UNSPECIFIED"),
    AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY("AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY"),
    AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS("AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS");

    public final String value;

    private AuthorizedSellerStatusTargetingOptionDetailsAuthorizedSellerStatusEnum(String value) {
        this.value = value;
    }
}
