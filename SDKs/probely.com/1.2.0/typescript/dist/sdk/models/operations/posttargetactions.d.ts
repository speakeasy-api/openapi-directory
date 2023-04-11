import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTargetActionsResponse extends SpeakeasyBase {
    /**
     * Available actions for targets
     */
    actions?: shared.Actions[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
