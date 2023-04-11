import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateLocationSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateLocationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLocationResponse?: shared.CreateLocationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
