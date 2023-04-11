import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RegistrationsForksCreateRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the registration.
     */
    registrationId: string;
}
export declare class RegistrationsForksCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
