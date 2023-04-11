import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Token type
 */
export declare enum GetClientClientIdTokenKindKindEnum {
    Registration = "'registration'",
    Selfie = "'selfie'",
    Plain = "'plain'"
}
export declare class GetClientClientIdTokenKindRequest extends SpeakeasyBase {
    /**
     * A client ID or email.
     */
    clientId: string;
    /**
     * Token type
     */
    kind: GetClientClientIdTokenKindKindEnum;
}
export declare class GetClientClientIdTokenKindResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
