import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2PhoneNumberAssignmentsIdJsonRequest extends SpeakeasyBase {
    /**
     * PhoneNumberAssignment ID
     */
    id: string;
}
export declare class GetV2PhoneNumberAssignmentsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
