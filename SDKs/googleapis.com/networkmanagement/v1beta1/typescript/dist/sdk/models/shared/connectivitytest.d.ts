import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint, EndpointInput } from "./endpoint";
import { ProbingDetails } from "./probingdetails";
import { ReachabilityDetails } from "./reachabilitydetails";
/**
 * A Connectivity Test for a network reachability analysis.
 */
export declare class ConnectivityTestInput extends SpeakeasyBase {
    /**
     * The user-supplied description of the Connectivity Test. Maximum of 512 characters.
     */
    description?: string;
    /**
     * Source or destination of the Connectivity Test.
     */
    destination?: EndpointInput;
    /**
     * Resource labels to represent user-provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * Required. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test}`
     */
    name?: string;
    /**
     * Results of active probing from the last run of the test.
     */
    probingDetails?: ProbingDetails;
    /**
     * IP Protocol of the test. When not provided, "TCP" is assumed.
     */
    protocol?: string;
    /**
     * Results of the configuration analysis from the last run of the test.
     */
    reachabilityDetails?: ReachabilityDetails;
    /**
     * Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.
     */
    relatedProjects?: string[];
    /**
     * Source or destination of the Connectivity Test.
     */
    source?: EndpointInput;
}
/**
 * A Connectivity Test for a network reachability analysis.
 */
export declare class ConnectivityTest extends SpeakeasyBase {
    /**
     * Output only. The time the test was created.
     */
    createTime?: string;
    /**
     * The user-supplied description of the Connectivity Test. Maximum of 512 characters.
     */
    description?: string;
    /**
     * Source or destination of the Connectivity Test.
     */
    destination?: Endpoint;
    /**
     * Output only. The display name of a Connectivity Test.
     */
    displayName?: string;
    /**
     * Resource labels to represent user-provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * Required. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test}`
     */
    name?: string;
    /**
     * Results of active probing from the last run of the test.
     */
    probingDetails?: ProbingDetails;
    /**
     * IP Protocol of the test. When not provided, "TCP" is assumed.
     */
    protocol?: string;
    /**
     * Results of the configuration analysis from the last run of the test.
     */
    reachabilityDetails?: ReachabilityDetails;
    /**
     * Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.
     */
    relatedProjects?: string[];
    /**
     * Source or destination of the Connectivity Test.
     */
    source?: Endpoint;
    /**
     * Output only. The time the test's configuration was updated.
     */
    updateTime?: string;
}
