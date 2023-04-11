import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetAllowedActionsOrganizationRequest extends SpeakeasyBase {
    org: string;
}
export declare class ActionsGetAllowedActionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    selectedActions?: shared.SelectedActions;
}
