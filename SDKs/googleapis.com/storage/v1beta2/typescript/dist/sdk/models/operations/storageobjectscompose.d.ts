import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageObjectsComposeSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsComposeSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsComposeSecurity extends SpeakeasyBase {
    option1?: StorageObjectsComposeSecurityOption1;
    option2?: StorageObjectsComposeSecurityOption2;
}
export declare class StorageObjectsComposeRequest extends SpeakeasyBase {
    composeRequest?: shared.ComposeRequest;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Name of the bucket containing the source objects. The destination object is stored in this bucket.
     */
    destinationBucket: string;
    /**
     * Name of the new object.
     */
    destinationObject: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Makes the operation conditional on whether the object's current generation matches the given value.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class StorageObjectsComposeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    object?: shared.ObjectT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
