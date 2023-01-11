package openapisdk.models.shared;


public enum TrackDataRequestTrackLicenseEnum {
    NO_RIGHTS_RESERVED("no-rights-reserved"),
    ALL_RIGHTS_RESERVED("all-rights-reserved"),
    CC_BY("cc-by"),
    CC_BY_NC("cc-by-nc"),
    CC_BY_ND("cc-by-nd"),
    CC_BY_SA("cc-by-sa"),
    CC_BY_NC_ND("cc-by-nc-nd"),
    CC_BY_NC_SA("cc-by-nc-sa");

    public final String value;

    private TrackDataRequestTrackLicenseEnum(String value) {
        this.value = value;
    }
}
