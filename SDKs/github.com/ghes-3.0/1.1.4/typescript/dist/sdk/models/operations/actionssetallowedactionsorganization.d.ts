import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsSetAllowedActionsOrganizationRequest extends SpeakeasyBase {
    org: string;
    selectedActions?: shared.SelectedActions;
}
export declare class ActionsSetAllowedActionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
