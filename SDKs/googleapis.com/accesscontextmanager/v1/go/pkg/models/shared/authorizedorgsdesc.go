package shared

type AuthorizedOrgsDescAssetTypeEnum string

const (
	AuthorizedOrgsDescAssetTypeEnumAssetTypeUnspecified        AuthorizedOrgsDescAssetTypeEnum = "ASSET_TYPE_UNSPECIFIED"
	AuthorizedOrgsDescAssetTypeEnumAssetTypeDevice             AuthorizedOrgsDescAssetTypeEnum = "ASSET_TYPE_DEVICE"
	AuthorizedOrgsDescAssetTypeEnumAssetTypeCredentialStrength AuthorizedOrgsDescAssetTypeEnum = "ASSET_TYPE_CREDENTIAL_STRENGTH"
)

type AuthorizedOrgsDescAuthorizationDirectionEnum string

const (
	AuthorizedOrgsDescAuthorizationDirectionEnumAuthorizationDirectionUnspecified AuthorizedOrgsDescAuthorizationDirectionEnum = "AUTHORIZATION_DIRECTION_UNSPECIFIED"
	AuthorizedOrgsDescAuthorizationDirectionEnumAuthorizationDirectionTo          AuthorizedOrgsDescAuthorizationDirectionEnum = "AUTHORIZATION_DIRECTION_TO"
	AuthorizedOrgsDescAuthorizationDirectionEnumAuthorizationDirectionFrom        AuthorizedOrgsDescAuthorizationDirectionEnum = "AUTHORIZATION_DIRECTION_FROM"
)

type AuthorizedOrgsDescAuthorizationTypeEnum string

const (
	AuthorizedOrgsDescAuthorizationTypeEnumAuthorizationTypeUnspecified AuthorizedOrgsDescAuthorizationTypeEnum = "AUTHORIZATION_TYPE_UNSPECIFIED"
	AuthorizedOrgsDescAuthorizationTypeEnumAuthorizationTypeTrust       AuthorizedOrgsDescAuthorizationTypeEnum = "AUTHORIZATION_TYPE_TRUST"
)

// AuthorizedOrgsDesc
// `AuthorizedOrgsDesc` is a resource that contains a list of organizations for a authorization type and asset type and its authorization direction.
type AuthorizedOrgsDesc struct {
	AssetType              *AuthorizedOrgsDescAssetTypeEnum              `json:"assetType,omitempty"`
	AuthorizationDirection *AuthorizedOrgsDescAuthorizationDirectionEnum `json:"authorizationDirection,omitempty"`
	AuthorizationType      *AuthorizedOrgsDescAuthorizationTypeEnum      `json:"authorizationType,omitempty"`
	Name                   *string                                       `json:"name,omitempty"`
	Orgs                   []string                                      `json:"orgs,omitempty"`
}
