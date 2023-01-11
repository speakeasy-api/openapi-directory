package openapisdk.models.shared;



/**
 * GoogleLongrunningOperation
 * This resource represents a long-running operation that is the result of a
 * network API call.
**/
public class GoogleLongrunningOperation {
    public Boolean done;
    public GoogleLongrunningOperation withDone(Boolean done) {
        this.done = done;
        return this;
    }
    public GoogleRpcStatus error;
    public GoogleLongrunningOperation withError(GoogleRpcStatus error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> metadata;
    public GoogleLongrunningOperation withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    public String name;
    public GoogleLongrunningOperation withName(String name) {
        this.name = name;
        return this;
    }
    public java.util.Map<String, Object> response;
    public GoogleLongrunningOperation withResponse(java.util.Map<String, Object> response) {
        this.response = response;
        return this;
    }
}