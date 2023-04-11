import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReplicapoolPoolsUpdatetemplateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ReplicapoolPoolsUpdatetemplateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ReplicapoolPoolsUpdatetemplateSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ReplicapoolPoolsUpdatetemplateSecurity extends SpeakeasyBase {
    option1?: ReplicapoolPoolsUpdatetemplateSecurityOption1;
    option2?: ReplicapoolPoolsUpdatetemplateSecurityOption2;
    option3?: ReplicapoolPoolsUpdatetemplateSecurityOption3;
}
export declare class ReplicapoolPoolsUpdatetemplateRequest extends SpeakeasyBase {
    template?: shared.Template;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The name of the replica pool for this request.
     */
    poolName: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * The project ID for this replica pool.
     */
    projectName: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * The zone for this replica pool.
     */
    zone: string;
}
export declare class ReplicapoolPoolsUpdatetemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
