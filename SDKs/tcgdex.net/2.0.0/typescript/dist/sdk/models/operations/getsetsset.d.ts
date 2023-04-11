import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetsSetRequest extends SpeakeasyBase {
    /**
     * the set ID or the set name
     */
    set: string;
}
export declare class GetSetsSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    set?: shared.Set;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
