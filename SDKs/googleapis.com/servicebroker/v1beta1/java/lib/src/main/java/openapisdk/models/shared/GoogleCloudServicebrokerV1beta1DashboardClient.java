package openapisdk.models.shared;



/**
 * GoogleCloudServicebrokerV1beta1DashboardClient
 * Message containing information required to activate Dashboard SSO feature.
**/
public class GoogleCloudServicebrokerV1beta1DashboardClient {
    public String id;
    public GoogleCloudServicebrokerV1beta1DashboardClient withId(String id) {
        this.id = id;
        return this;
    }
    public String redirectUri;
    public GoogleCloudServicebrokerV1beta1DashboardClient withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
    public String secret;
    public GoogleCloudServicebrokerV1beta1DashboardClient withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}