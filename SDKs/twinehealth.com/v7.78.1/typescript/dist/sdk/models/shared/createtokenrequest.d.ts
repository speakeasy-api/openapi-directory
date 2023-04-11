import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateTokenRequestDataAttributesGrantTypeEnum {
    RefreshToken = "refresh_token",
    ClientCredentials = "client_credentials"
}
export declare class CreateTokenRequestDataAttributes extends SpeakeasyBase {
    /**
     * Contact Fitbit Plus API Support to get a client id and secret.
     */
    clientId: string;
    /**
     * Contact Fitbit Plus API Support to get a client id and secret. Secret is required if grant_type is "client_credentials"
     */
    clientSecret?: string;
    grantType: CreateTokenRequestDataAttributesGrantTypeEnum;
    /**
     * Required if grant_type is "refresh_token"
     */
    refreshToken?: string;
}
export declare enum CreateTokenRequestDataTypeEnum {
    Token = "token"
}
export declare class CreateTokenRequestData extends SpeakeasyBase {
    attributes: CreateTokenRequestDataAttributes;
    type?: CreateTokenRequestDataTypeEnum;
}
export declare class CreateTokenRequest extends SpeakeasyBase {
    data: CreateTokenRequestData;
}
