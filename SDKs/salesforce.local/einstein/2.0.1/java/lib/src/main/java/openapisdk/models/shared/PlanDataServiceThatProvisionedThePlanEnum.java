package openapisdk.models.shared;


public enum PlanDataServiceThatProvisionedThePlanEnum {
    SALESFORCE("SALESFORCE"),
    HEROKU("HEROKU"),
    SF_AUTO_PROVISION("SF_AUTO_PROVISION"),
    SF_AUTO_PROVISION_BOUND("SF_AUTO_PROVISION_BOUND");

    public final String value;

    private PlanDataServiceThatProvisionedThePlanEnum(String value) {
        this.value = value;
    }
}
