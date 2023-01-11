import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PasswordGrantTypeEnum {
    Password = "password"
}
export declare class Password extends SpeakeasyBase {
    clientId?: string;
    clientSecret?: string;
    grantType?: PasswordGrantTypeEnum;
    password?: string;
    redirectUri?: string;
    userName?: string;
}
