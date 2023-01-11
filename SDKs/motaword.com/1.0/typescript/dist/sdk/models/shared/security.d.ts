import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeMwoAuth extends SpeakeasyBase {
    authorization: string;
}
export declare class Security extends SpeakeasyBase {
    mwoAuth: SchemeMwoAuth;
}
export declare class SchemeBasicAuth extends SpeakeasyBase {
    password: string;
    username: string;
}
