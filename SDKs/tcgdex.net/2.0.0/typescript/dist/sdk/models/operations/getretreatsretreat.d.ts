import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRetreatsRetreatRequest extends SpeakeasyBase {
    retreat: string;
}
export declare class GetRetreatsRetreatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get the cards containing the specified retreat count
     */
    stringEndpoint?: shared.StringEndpoint;
}
