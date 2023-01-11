package openapisdk.models.shared;



/**
 * GoogleCloudServicebrokerV1beta1Service
 * The resource model mostly follows the Open Service Broker API, as
 * described here:
 * https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md
 * Though due to Google Specifics it has additional optional fields.
**/
public class GoogleCloudServicebrokerV1beta1Service {
    public Boolean bindable;
    public GoogleCloudServicebrokerV1beta1Service withBindable(Boolean bindable) {
        this.bindable = bindable;
        return this;
    }
    public Boolean bindingRetrievable;
    public GoogleCloudServicebrokerV1beta1Service withBindingRetrievable(Boolean bindingRetrievable) {
        this.bindingRetrievable = bindingRetrievable;
        return this;
    }
    public Boolean bindingsRetrievable;
    public GoogleCloudServicebrokerV1beta1Service withBindingsRetrievable(Boolean bindingsRetrievable) {
        this.bindingsRetrievable = bindingsRetrievable;
        return this;
    }
    public GoogleCloudServicebrokerV1beta1DashboardClient dashboardClient;
    public GoogleCloudServicebrokerV1beta1Service withDashboardClient(GoogleCloudServicebrokerV1beta1DashboardClient dashboardClient) {
        this.dashboardClient = dashboardClient;
        return this;
    }
    public String description;
    public GoogleCloudServicebrokerV1beta1Service withDescription(String description) {
        this.description = description;
        return this;
    }
    public String id;
    public GoogleCloudServicebrokerV1beta1Service withId(String id) {
        this.id = id;
        return this;
    }
    public Boolean instancesRetrievable;
    public GoogleCloudServicebrokerV1beta1Service withInstancesRetrievable(Boolean instancesRetrievable) {
        this.instancesRetrievable = instancesRetrievable;
        return this;
    }
    public java.util.Map<String, Object> metadata;
    public GoogleCloudServicebrokerV1beta1Service withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    public String name;
    public GoogleCloudServicebrokerV1beta1Service withName(String name) {
        this.name = name;
        return this;
    }
    public Boolean planUpdateable;
    public GoogleCloudServicebrokerV1beta1Service withPlanUpdateable(Boolean planUpdateable) {
        this.planUpdateable = planUpdateable;
        return this;
    }
    public GoogleCloudServicebrokerV1beta1Plan[] plans;
    public GoogleCloudServicebrokerV1beta1Service withPlans(GoogleCloudServicebrokerV1beta1Plan[] plans) {
        this.plans = plans;
        return this;
    }
    public String[] tags;
    public GoogleCloudServicebrokerV1beta1Service withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}