import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
/**
 * The type of function. This determines when the function will be called.
 */
export declare enum PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION",
    PreFetchOptions = "PRE_FETCH_OPTIONS",
    PostFetchOptions = "POST_FETCH_OPTIONS"
}
export declare class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest extends SpeakeasyBase {
    /**
     * The function source code. Must be valid JavaScript code.
     */
    requestBody: string;
    appId: number;
    /**
     * The ID of the custom workflow action.
     */
    definitionId: string;
    /**
     * The type of function. This determines when the function will be called.
     */
    functionType: PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum;
}
export declare class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    actionFunctionIdentifier?: shared.ActionFunctionIdentifier;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
