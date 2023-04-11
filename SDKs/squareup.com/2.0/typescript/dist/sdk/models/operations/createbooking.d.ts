import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateBookingSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateBookingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createBookingResponse?: shared.CreateBookingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
