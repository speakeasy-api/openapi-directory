import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest extends SpeakeasyBase {
    appId: number;
    /**
     * The ID of the custom workflow action.
     */
    definitionId: string;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * successful operation
     */
    collectionResponseActionFunctionIdentifierNoPaging?: shared.CollectionResponseActionFunctionIdentifierNoPaging;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
