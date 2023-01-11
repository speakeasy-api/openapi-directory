package openapisdk.models.shared;



public class RateLimit {
    public RateLimitErrors[] errors;
    public RateLimit withErrors(RateLimitErrors[] errors) {
        this.errors = errors;
        return this;
    }
}