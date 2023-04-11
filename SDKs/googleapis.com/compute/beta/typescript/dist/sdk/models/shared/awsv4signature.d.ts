import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the configurations necessary to generate a signature for access to private storage buckets that support Signature Version 4 for authentication. The service name for generating the authentication header will always default to 's3'.
 */
export declare class Awsv4Signature extends SpeakeasyBase {
    /**
     * The access key used for s3 bucket authentication. Required for updating or creating a backend that uses AWS v4 signature authentication, but will not be returned as part of the configuration when queried with a REST API GET request. @InputOnly
     */
    accessKey?: string;
    /**
     * The identifier of an access key used for s3 bucket authentication.
     */
    accessKeyId?: string;
    /**
     * The optional version identifier for the access key. You can use this to keep track of different iterations of your access key.
     */
    accessKeyVersion?: string;
    /**
     * The name of the cloud region of your origin. This is a free-form field with the name of the region your cloud uses to host your origin. For example, "us-east-1" for AWS or "us-ashburn-1" for OCI.
     */
    originRegion?: string;
}
