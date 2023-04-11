import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The platform of the Firebase App.
 */
export declare enum FirebaseAppInfoPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Ios = "IOS",
    Android = "ANDROID",
    Web = "WEB"
}
/**
 * Output only. The lifecycle state of the App.
 */
export declare enum FirebaseAppInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleted = "DELETED"
}
/**
 * A high-level summary of an App.
 */
export declare class FirebaseAppInfo extends SpeakeasyBase {
    /**
     * The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the App. Be aware that this value is the UID of the API key, _not_ the [`keyString`](https://cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys#Key.FIELDS.key_string) of the API key. The `keyString` is the value that can be found in the App's configuration artifact ([`AndroidApp`](../../rest/v1beta1/projects.androidApps/getConfig) | [`IosApp`](../../rest/v1beta1/projects.iosApps/getConfig) | [`WebApp`](../../rest/v1beta1/projects.webApps/getConfig)). If `api_key_id` is not set in requests to create the App ([`AndroidApp`](../../rest/v1beta1/projects.androidApps/create) | [`IosApp`](../../rest/v1beta1/projects.iosApps/create) | [`WebApp`](../../rest/v1beta1/projects.webApps/create)), then Firebase automatically associates an `api_key_id` with the App. This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.
     */
    apiKeyId?: string;
    /**
     * Output only. Immutable. The globally unique, Firebase-assigned identifier for the `WebApp`. This identifier should be treated as an opaque token, as the data format is not specified.
     */
    appId?: string;
    /**
     * The user-assigned display name of the Firebase App.
     */
    displayName?: string;
    /**
     * Output only. Timestamp of when the App will be considered expired and cannot be undeleted. This value is only provided if the App is in the `DELETED` state.
     */
    expireTime?: string;
    /**
     * The resource name of the Firebase App, in the format: projects/PROJECT_ID /iosApps/APP_ID or projects/PROJECT_ID/androidApps/APP_ID or projects/ PROJECT_ID/webApps/APP_ID
     */
    name?: string;
    /**
     * Output only. Immutable. The platform-specific identifier of the App. *Note:* For most use cases, use `appId`, which is the canonical, globally unique identifier for referencing an App. This string is derived from a native identifier for each platform: `packageName` for an `AndroidApp`, `bundleId` for an `IosApp`, and `webId` for a `WebApp`. Its contents should be treated as opaque, as the native identifier format may change as platforms evolve. This string is only unique within a `FirebaseProject` and its associated Apps.
     */
    namespace?: string;
    /**
     * The platform of the Firebase App.
     */
    platform?: FirebaseAppInfoPlatformEnum;
    /**
     * Output only. The lifecycle state of the App.
     */
    state?: FirebaseAppInfoStateEnum;
}
