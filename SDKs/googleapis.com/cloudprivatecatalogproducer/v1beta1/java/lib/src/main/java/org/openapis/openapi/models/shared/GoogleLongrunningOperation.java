/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * GoogleLongrunningOperation - This resource represents a long-running operation that is the result of a
 * network API call.
 */
public class GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress.
     * If `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    
    public Boolean done;

    public GoogleLongrunningOperation withDone(Boolean done) {
        this.done = done;
        return this;
    }
    
    /**
     * The `Status` type defines a logical error model that is suitable for
     * different programming environments, including REST APIs and RPC APIs. It is
     * used by [gRPC](https://github.com/grpc). Each `Status` message contains
     * three pieces of data: error code, error message, and error details.
     * 
     * You can find out more about this error model and how to work with it in the
     * [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    
    public GoogleRpcStatus error;

    public GoogleLongrunningOperation withError(GoogleRpcStatus error) {
        this.error = error;
        return this;
    }
    
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    
    public java.util.Map<String, Object> metadata;

    public GoogleLongrunningOperation withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    
    /**
     * The server-assigned name, which is only unique within the same service that
     * originally returns it. If you use the default HTTP mapping, the
     * `name` should be a resource name ending with `operations/{unique_id}`.
     */
    
    public String name;

    public GoogleLongrunningOperation withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx`
     * is the original method name.  For example, if the original method name
     * is `TakeSnapshot()`, the inferred response type is
     * `TakeSnapshotResponse`.
     */
    
    public java.util.Map<String, Object> response;

    public GoogleLongrunningOperation withResponse(java.util.Map<String, Object> response) {
        this.response = response;
        return this;
    }
    
    public GoogleLongrunningOperation(){}
}
