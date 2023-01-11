import { SpeakeasyBase } from "../../../internal/utils";
export declare class AuthFailedErrors extends SpeakeasyBase {
    title?: string;
}
export declare class AuthFailed extends SpeakeasyBase {
    errors?: AuthFailedErrors[];
}
