import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The type of Hosting site. Every Firebase project has a `DEFAULT_SITE`, which is created when Hosting is provisioned for the project. All additional sites are `USER_SITE`.
 */
export declare enum SiteTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    DefaultSite = "DEFAULT_SITE",
    UserSite = "USER_SITE"
}
/**
 * A `Site` represents a Firebase Hosting site.
 */
export declare class Site extends SpeakeasyBase {
    /**
     * Optional. The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the Hosting site.
     */
    appId?: string;
    /**
     * Output only. The default URL for the Hosting site.
     */
    defaultUrl?: string;
    /**
     * Optional. User-specified labels for the Hosting site.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The fully-qualified resource name of the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID PROJECT_IDENTIFIER: the Firebase project's [`ProjectNumber`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510).
     */
    name?: string;
    /**
     * Output only. The type of Hosting site. Every Firebase project has a `DEFAULT_SITE`, which is created when Hosting is provisioned for the project. All additional sites are `USER_SITE`.
     */
    type?: SiteTypeEnum;
}
/**
 * A `Site` represents a Firebase Hosting site.
 */
export declare class SiteInput extends SpeakeasyBase {
    /**
     * Optional. The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the Hosting site.
     */
    appId?: string;
    /**
     * Optional. User-specified labels for the Hosting site.
     */
    labels?: Record<string, string>;
}
