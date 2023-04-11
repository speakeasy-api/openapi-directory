import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostBillingActionsResponse extends SpeakeasyBase {
    /**
     * Required action to enable targets
     */
    action?: shared.Action;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
