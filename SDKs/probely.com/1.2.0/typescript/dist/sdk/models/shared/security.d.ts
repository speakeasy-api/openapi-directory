import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeJwtAuth extends SpeakeasyBase {
    authorization: string;
}
export declare class Security extends SpeakeasyBase {
    jwtAuth: SchemeJwtAuth;
}
