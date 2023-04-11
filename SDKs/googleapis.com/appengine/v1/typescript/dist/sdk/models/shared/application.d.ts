import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureSettings } from "./featuresettings";
import { IdentityAwareProxy, IdentityAwareProxyInput } from "./identityawareproxy";
import { UrlDispatchRule } from "./urldispatchrule";
/**
 * The type of the Cloud Firestore or Cloud Datastore database associated with this application.
 */
export declare enum ApplicationDatabaseTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED",
    CloudDatastore = "CLOUD_DATASTORE",
    CloudFirestore = "CLOUD_FIRESTORE",
    CloudDatastoreCompatibility = "CLOUD_DATASTORE_COMPATIBILITY"
}
/**
 * Serving status of this application.
 */
export declare enum ApplicationServingStatusEnum {
    Unspecified = "UNSPECIFIED",
    Serving = "SERVING",
    UserDisabled = "USER_DISABLED",
    SystemDisabled = "SYSTEM_DISABLED"
}
/**
 * An Application resource contains the top-level configuration of an App Engine application.
 */
export declare class Application extends SpeakeasyBase {
    /**
     * Google Apps authentication domain that controls which users can access this application.Defaults to open access for any Google Account.
     */
    authDomain?: string;
    /**
     * Output only. Google Cloud Storage bucket that can be used for storing files associated with this application. This bucket is associated with the application and can be used by the gcloud deployment commands.@OutputOnly
     */
    codeBucket?: string;
    /**
     * The type of the Cloud Firestore or Cloud Datastore database associated with this application.
     */
    databaseType?: ApplicationDatabaseTypeEnum;
    /**
     * Output only. Google Cloud Storage bucket that can be used by this application to store content.@OutputOnly
     */
    defaultBucket?: string;
    /**
     * Cookie expiration policy for this application.
     */
    defaultCookieExpiration?: string;
    /**
     * Output only. Hostname used to reach this application, as resolved by App Engine.@OutputOnly
     */
    defaultHostname?: string;
    /**
     * HTTP path dispatch rules for requests to the application that do not explicitly target a service or version. Rules are order-dependent. Up to 20 dispatch rules can be supported.
     */
    dispatchRules?: UrlDispatchRule[];
    /**
     * The feature specific settings to be used in the application. These define behaviors that are user configurable.
     */
    featureSettings?: FeatureSettings;
    /**
     * Output only. The Google Container Registry domain used for storing managed build docker images for this application.
     */
    gcrDomain?: string;
    /**
     * Identity-Aware Proxy
     */
    iap?: IdentityAwareProxy;
    /**
     * Identifier of the Application resource. This identifier is equivalent to the project ID of the Google Cloud Platform project where you want to deploy your application. Example: myapp.
     */
    id?: string;
    /**
     * Location from which this application runs. Application instances run out of the data centers in the specified location, which is also where all of the application's end user content is stored.Defaults to us-central.View the list of supported locations (https://cloud.google.com/appengine/docs/locations).
     */
    locationId?: string;
    /**
     * Output only. Full path to the Application resource in the API. Example: apps/myapp.@OutputOnly
     */
    name?: string;
    /**
     * The service account associated with the application. This is the app-level default identity. If no identity provided during create version, Admin API will fallback to this one.
     */
    serviceAccount?: string;
    /**
     * Serving status of this application.
     */
    servingStatus?: ApplicationServingStatusEnum;
}
/**
 * An Application resource contains the top-level configuration of an App Engine application.
 */
export declare class ApplicationInput extends SpeakeasyBase {
    /**
     * Google Apps authentication domain that controls which users can access this application.Defaults to open access for any Google Account.
     */
    authDomain?: string;
    /**
     * The type of the Cloud Firestore or Cloud Datastore database associated with this application.
     */
    databaseType?: ApplicationDatabaseTypeEnum;
    /**
     * Cookie expiration policy for this application.
     */
    defaultCookieExpiration?: string;
    /**
     * HTTP path dispatch rules for requests to the application that do not explicitly target a service or version. Rules are order-dependent. Up to 20 dispatch rules can be supported.
     */
    dispatchRules?: UrlDispatchRule[];
    /**
     * The feature specific settings to be used in the application. These define behaviors that are user configurable.
     */
    featureSettings?: FeatureSettings;
    /**
     * Identity-Aware Proxy
     */
    iap?: IdentityAwareProxyInput;
    /**
     * Identifier of the Application resource. This identifier is equivalent to the project ID of the Google Cloud Platform project where you want to deploy your application. Example: myapp.
     */
    id?: string;
    /**
     * Location from which this application runs. Application instances run out of the data centers in the specified location, which is also where all of the application's end user content is stored.Defaults to us-central.View the list of supported locations (https://cloud.google.com/appengine/docs/locations).
     */
    locationId?: string;
    /**
     * The service account associated with the application. This is the app-level default identity. If no identity provided during create version, Admin API will fallback to this one.
     */
    serviceAccount?: string;
    /**
     * Serving status of this application.
     */
    servingStatus?: ApplicationServingStatusEnum;
}
