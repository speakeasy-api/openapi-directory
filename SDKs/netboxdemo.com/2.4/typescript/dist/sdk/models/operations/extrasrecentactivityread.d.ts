import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasRecentActivityReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this user action.
     */
    id: number;
}
export declare class ExtrasRecentActivityReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    userAction?: shared.UserAction;
}
