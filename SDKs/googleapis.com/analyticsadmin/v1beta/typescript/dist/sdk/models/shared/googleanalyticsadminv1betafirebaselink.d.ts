import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A link between a GA4 property and a Firebase project.
 */
export declare class GoogleAnalyticsAdminV1betaFirebaseLink extends SpeakeasyBase {
    /**
     * Output only. Time when this FirebaseLink was originally created.
     */
    createTime?: string;
    /**
     * Output only. Example format: properties/1234/firebaseLinks/5678
     */
    name?: string;
    /**
     * Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project_name that contains a project number. Format: 'projects/{project number}' Example: 'projects/1234'
     */
    project?: string;
}
/**
 * A link between a GA4 property and a Firebase project.
 */
export declare class GoogleAnalyticsAdminV1betaFirebaseLinkInput extends SpeakeasyBase {
    /**
     * Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project_name that contains a project number. Format: 'projects/{project number}' Example: 'projects/1234'
     */
    project?: string;
}
