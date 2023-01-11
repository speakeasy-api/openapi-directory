package openapisdk.models.shared;


public enum BookingEngineIdEnum {
    FREESALE_BE("FreesaleBE"),
    UNCONDITIONAL_BE("UnconditionalBE"),
    DEFERRED_CRMBE("DeferredCRMBE"),
    FREESALE_ON_REQUEST_BE("FreesaleOnRequestBE");

    public final String value;

    private BookingEngineIdEnum(String value) {
        this.value = value;
    }
}
