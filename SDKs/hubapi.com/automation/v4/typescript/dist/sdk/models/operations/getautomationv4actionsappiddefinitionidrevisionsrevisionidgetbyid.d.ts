import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest extends SpeakeasyBase {
    appId: number;
    /**
     * The ID of the custom workflow action.
     */
    definitionId: string;
    /**
     * The version of the custom workflow action.
     */
    revisionId: string;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    actionRevision?: shared.ActionRevision;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
