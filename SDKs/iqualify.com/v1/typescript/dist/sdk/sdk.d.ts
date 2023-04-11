import { APIInfo } from "./apiinfo";
import { AssessmentData } from "./assessmentdata";
import { AssessmentGroups } from "./assessmentgroups";
import { AssessmentManagement } from "./assessmentmanagement";
import { Badges } from "./badges";
import { Channels } from "./channels";
import { CourseMappings } from "./coursemappings";
import { CourseMetadata } from "./coursemetadata";
import { Courses } from "./courses";
import { LearnerActivity } from "./learneractivity";
import * as shared from "./models/shared";
import { OfferingLearners } from "./offeringlearners";
import { OfferingMetadata } from "./offeringmetadata";
import { Offerings } from "./offerings";
import { Organisation } from "./organisation";
import { Pulses } from "./pulses";
import { UsersInIQualify } from "./usersiniqualify";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.iqualify.com/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The iQualify API offers management responses for building
 *
 * @remarks
 * learning experiences using your iQualify instance data.
 *
 * Once you’ve registered with iQualify, you can request an API access token by
 * navigating to the API access section of the "Account Settings" area.
 *
 * Find out how to [Request your API access token](https://www.iqualify.com/help/connecting-iqualify-to-other-systems/api/how-to-access-and-manage-your-api-token)
 * on our Knowledge base.
 *
 * All endpoints are only accessible via https and are located at
 * api.iqualify.com. For instance: you can find your current offerings by
 * accessing the following URL:
 *
 *     https://api.iqualify.com/v1/offerings/current
 *
 *
 */
export declare class SDK {
    apiInfo: APIInfo;
    assessmentData: AssessmentData;
    assessmentGroups: AssessmentGroups;
    assessmentManagement: AssessmentManagement;
    badges: Badges;
    channels: Channels;
    courseMappings: CourseMappings;
    courseMetadata: CourseMetadata;
    courses: Courses;
    learnerActivity: LearnerActivity;
    offeringLearners: OfferingLearners;
    offeringMetadata: OfferingMetadata;
    offerings: Offerings;
    organisation: Organisation;
    pulses: Pulses;
    usersInIQualify: UsersInIQualify;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
