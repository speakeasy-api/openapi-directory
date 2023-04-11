import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLocationRuleByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class GetLocationRuleByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the location rule
     */
    locationRule?: shared.LocationRule;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
