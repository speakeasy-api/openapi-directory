import { SpeakeasyBase } from "../../../internal/utils";
import { Header } from "./header";
import { I18nConfig } from "./i18nconfig";
import { Redirect } from "./redirect";
import { Rewrite } from "./rewrite";
/**
 * How to handle well known App Association files.
 */
export declare enum ServingConfigAppAssociationEnum {
    Auto = "AUTO",
    None = "NONE"
}
/**
 * Defines how to handle a trailing slash in the URL path.
 */
export declare enum ServingConfigTrailingSlashBehaviorEnum {
    TrailingSlashBehaviorUnspecified = "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED",
    Add = "ADD",
    Remove = "REMOVE"
}
/**
 * The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order).
 */
export declare class ServingConfig extends SpeakeasyBase {
    /**
     * How to handle well known App Association files.
     */
    appAssociation?: ServingConfigAppAssociationEnum;
    /**
     * Defines whether to drop the file extension from uploaded files.
     */
    cleanUrls?: boolean;
    /**
     * An array of objects, where each object specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers.
     */
    headers?: Header[];
    /**
     * If provided, i18n rewrites are enabled.
     */
    i18n?: I18nConfig;
    /**
     * An array of objects (called redirect rules), where each rule specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.
     */
    redirects?: Redirect[];
    /**
     * An array of objects (called rewrite rules), where each rule specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.
     */
    rewrites?: Rewrite[];
    /**
     * Defines how to handle a trailing slash in the URL path.
     */
    trailingSlashBehavior?: ServingConfigTrailingSlashBehaviorEnum;
}
