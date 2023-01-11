package openapisdk.models.shared;



/**
 * GoogleRpcStatus
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
 * three pieces of data: error code, error message, and error details.
 * 
 * You can find out more about this error model and how to work with it in the
 * [API Design Guide](https://cloud.google.com/apis/design/errors).
**/
public class GoogleRpcStatus {
    public Integer code;
    public GoogleRpcStatus withCode(Integer code) {
        this.code = code;
        return this;
    }
    public java.util.Map<String, Object>[] details;
    public GoogleRpcStatus withDetails(java.util.Map<String, Object>[] details) {
        this.details = details;
        return this;
    }
    public String message;
    public GoogleRpcStatus withMessage(String message) {
        this.message = message;
        return this;
    }
}