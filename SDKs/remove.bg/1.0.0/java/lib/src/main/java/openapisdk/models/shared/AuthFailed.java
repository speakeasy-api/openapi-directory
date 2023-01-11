package openapisdk.models.shared;



public class AuthFailed {
    public AuthFailedErrors[] errors;
    public AuthFailed withErrors(AuthFailedErrors[] errors) {
        this.errors = errors;
        return this;
    }
}