import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateShiftSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateShiftResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createShiftResponse?: shared.CreateShiftResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
