import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the newly added resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
