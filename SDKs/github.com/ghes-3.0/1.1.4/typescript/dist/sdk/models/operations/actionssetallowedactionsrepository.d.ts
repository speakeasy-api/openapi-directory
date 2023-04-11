import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsSetAllowedActionsRepositoryRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
    selectedActions?: shared.SelectedActions;
}
export declare class ActionsSetAllowedActionsRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
