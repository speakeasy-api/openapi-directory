import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetAllowedActionsRepositoryRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsGetAllowedActionsRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    selectedActions?: shared.SelectedActions;
}
