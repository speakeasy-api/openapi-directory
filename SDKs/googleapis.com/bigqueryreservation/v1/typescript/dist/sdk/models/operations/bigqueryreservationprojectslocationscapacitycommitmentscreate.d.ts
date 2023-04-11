import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity extends SpeakeasyBase {
    option1?: BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1;
    option2?: BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    capacityCommitmentInput?: shared.CapacityCommitmentInput;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * The optional capacity commitment ID. Capacity commitment name will be generated automatically if this field is empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split or merged.
     */
    capacityCommitmentId?: string;
    /**
     * If true, fail the request if another project in the organization has a capacity commitment.
     */
    enforceSingleAdminProjectPerOrg?: boolean;
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
     * Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US`
     */
    parent: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    capacityCommitment?: shared.CapacityCommitment;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
