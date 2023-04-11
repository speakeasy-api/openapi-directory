import { SpeakeasyBase } from "../../../internal/utils";
import { ClientLibrarySettings } from "./clientlibrarysettings";
import { MethodSettings } from "./methodsettings";
/**
 * For whom the client library is being published.
 */
export declare enum PublishingOrganizationEnum {
    ClientLibraryOrganizationUnspecified = "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED",
    Cloud = "CLOUD",
    Ads = "ADS",
    Photos = "PHOTOS",
    StreetView = "STREET_VIEW"
}
/**
 * This message configures the settings for publishing [Google Cloud Client libraries](https://cloud.google.com/apis/docs/cloud-client-libraries) generated from the service config.
 */
export declare class Publishing extends SpeakeasyBase {
    /**
     * Used as a tracking tag when collecting data about the APIs developer relations artifacts like docs, packages delivered to package managers, etc. Example: "speech".
     */
    apiShortName?: string;
    /**
     * GitHub teams to be added to CODEOWNERS in the directory in GitHub containing source code for the client libraries for this API.
     */
    codeownerGithubTeams?: string[];
    /**
     * A prefix used in sample code when demarking regions to be included in documentation.
     */
    docTagPrefix?: string;
    /**
     * Link to product home page. Example: https://cloud.google.com/asset-inventory/docs/overview
     */
    documentationUri?: string;
    /**
     * GitHub label to apply to issues and pull requests opened for this API.
     */
    githubLabel?: string;
    /**
     * Client library settings. If the same version string appears multiple times in this list, then the last one wins. Settings from earlier settings with the same version string are discarded.
     */
    librarySettings?: ClientLibrarySettings[];
    /**
     * A list of API method settings, e.g. the behavior for methods that use the long-running operation pattern.
     */
    methodSettings?: MethodSettings[];
    /**
     * Link to a place that API users can report issues. Example: https://issuetracker.google.com/issues/new?component=190865&template=1161103
     */
    newIssueUri?: string;
    /**
     * For whom the client library is being published.
     */
    organization?: PublishingOrganizationEnum;
    /**
     * Optional link to proto reference documentation. Example: https://cloud.google.com/pubsub/lite/docs/reference/rpc
     */
    protoReferenceDocumentationUri?: string;
}
