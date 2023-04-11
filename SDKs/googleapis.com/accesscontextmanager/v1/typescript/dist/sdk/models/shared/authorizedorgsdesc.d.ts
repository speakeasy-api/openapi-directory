import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The asset type of this authorized orgs desc. Valid values are `ASSET_TYPE_DEVICE`, and `ASSET_TYPE_CREDENTIAL_STRENGTH`.
 */
export declare enum AuthorizedOrgsDescAssetTypeEnum {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    AssetTypeDevice = "ASSET_TYPE_DEVICE",
    AssetTypeCredentialStrength = "ASSET_TYPE_CREDENTIAL_STRENGTH"
}
/**
 * The direction of the authorization relationship between this organization and the organizations listed in the `orgs` field. The valid values for this field include the following: `AUTHORIZATION_DIRECTION_FROM`: Allows this organization to evaluate traffic in the organizations listed in the `orgs` field. `AUTHORIZATION_DIRECTION_TO`: Allows the organizations listed in the `orgs` field to evaluate the traffic in this organization. For the authorization relationship to take effect, all of the organizations must authorize and specify the appropriate relationship direction. For example, if organization A authorized organization B and C to evaluate its traffic, by specifying `AUTHORIZATION_DIRECTION_TO` as the authorization direction, organizations B and C must specify `AUTHORIZATION_DIRECTION_FROM` as the authorization direction in their `AuthorizedOrgsDesc` resource.
 */
export declare enum AuthorizedOrgsDescAuthorizationDirectionEnum {
    AuthorizationDirectionUnspecified = "AUTHORIZATION_DIRECTION_UNSPECIFIED",
    AuthorizationDirectionTo = "AUTHORIZATION_DIRECTION_TO",
    AuthorizationDirectionFrom = "AUTHORIZATION_DIRECTION_FROM"
}
/**
 * A granular control type for authorization levels. Valid value is `AUTHORIZATION_TYPE_TRUST`.
 */
export declare enum AuthorizedOrgsDescAuthorizationTypeEnum {
    AuthorizationTypeUnspecified = "AUTHORIZATION_TYPE_UNSPECIFIED",
    AuthorizationTypeTrust = "AUTHORIZATION_TYPE_TRUST"
}
/**
 * `AuthorizedOrgsDesc` contains data for an organization's authorization policy.
 */
export declare class AuthorizedOrgsDesc extends SpeakeasyBase {
    /**
     * The asset type of this authorized orgs desc. Valid values are `ASSET_TYPE_DEVICE`, and `ASSET_TYPE_CREDENTIAL_STRENGTH`.
     */
    assetType?: AuthorizedOrgsDescAssetTypeEnum;
    /**
     * The direction of the authorization relationship between this organization and the organizations listed in the `orgs` field. The valid values for this field include the following: `AUTHORIZATION_DIRECTION_FROM`: Allows this organization to evaluate traffic in the organizations listed in the `orgs` field. `AUTHORIZATION_DIRECTION_TO`: Allows the organizations listed in the `orgs` field to evaluate the traffic in this organization. For the authorization relationship to take effect, all of the organizations must authorize and specify the appropriate relationship direction. For example, if organization A authorized organization B and C to evaluate its traffic, by specifying `AUTHORIZATION_DIRECTION_TO` as the authorization direction, organizations B and C must specify `AUTHORIZATION_DIRECTION_FROM` as the authorization direction in their `AuthorizedOrgsDesc` resource.
     */
    authorizationDirection?: AuthorizedOrgsDescAuthorizationDirectionEnum;
    /**
     * A granular control type for authorization levels. Valid value is `AUTHORIZATION_TYPE_TRUST`.
     */
    authorizationType?: AuthorizedOrgsDescAuthorizationTypeEnum;
    /**
     * Resource name for the `AuthorizedOrgsDesc`. Format: `accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}`. The `authorized_orgs_desc` component must begin with a letter, followed by alphanumeric characters or `_`. After you create an `AuthorizedOrgsDesc`, you cannot change its `name`.
     */
    name?: string;
    /**
     * The list of organization ids in this AuthorizedOrgsDesc. Format: `organizations/` Example: `organizations/123456`
     */
    orgs?: string[];
}
