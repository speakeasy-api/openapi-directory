import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateLocationRuleRequest extends SpeakeasyBase {
    /**
     * A JSON object containing new properties
     */
    locationRuleUpdate: shared.LocationRuleUpdate;
    /**
     * Unique identifier
     */
    id: string;
}
export declare class UpdateLocationRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the modified resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
