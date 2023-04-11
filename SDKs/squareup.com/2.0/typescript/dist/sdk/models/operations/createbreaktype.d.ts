import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateBreakTypeSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateBreakTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createBreakTypeResponse?: shared.CreateBreakTypeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
