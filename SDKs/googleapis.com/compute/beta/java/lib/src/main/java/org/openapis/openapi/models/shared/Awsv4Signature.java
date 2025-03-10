/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Awsv4Signature - Contains the configurations necessary to generate a signature for access to private storage buckets that support Signature Version 4 for authentication. The service name for generating the authentication header will always default to 's3'.
 */
public class Awsv4Signature {
    /**
     * The access key used for s3 bucket authentication. Required for updating or creating a backend that uses AWS v4 signature authentication, but will not be returned as part of the configuration when queried with a REST API GET request. @InputOnly
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessKey")
    public String accessKey;

    public Awsv4Signature withAccessKey(String accessKey) {
        this.accessKey = accessKey;
        return this;
    }
    
    /**
     * The identifier of an access key used for s3 bucket authentication.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessKeyId")
    public String accessKeyId;

    public Awsv4Signature withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    
    /**
     * The optional version identifier for the access key. You can use this to keep track of different iterations of your access key.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessKeyVersion")
    public String accessKeyVersion;

    public Awsv4Signature withAccessKeyVersion(String accessKeyVersion) {
        this.accessKeyVersion = accessKeyVersion;
        return this;
    }
    
    /**
     * The name of the cloud region of your origin. This is a free-form field with the name of the region your cloud uses to host your origin. For example, "us-east-1" for AWS or "us-ashburn-1" for OCI.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originRegion")
    public String originRegion;

    public Awsv4Signature withOriginRegion(String originRegion) {
        this.originRegion = originRegion;
        return this;
    }
    
    public Awsv4Signature(){}
}
