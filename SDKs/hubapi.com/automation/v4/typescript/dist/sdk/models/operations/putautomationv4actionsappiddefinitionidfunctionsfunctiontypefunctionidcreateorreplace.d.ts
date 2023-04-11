import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
/**
 * The type of function. This determines when the function will be called.
 */
export declare enum PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION",
    PreFetchOptions = "PRE_FETCH_OPTIONS",
    PostFetchOptions = "POST_FETCH_OPTIONS"
}
export declare class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest extends SpeakeasyBase {
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
     * The ID qualifier for the function. This is used to specify which input field a function is associated with for `PRE_FETCH_OPTIONS` and `POST_FETCH_OPTIONS` function types.
     */
    functionId: string;
    /**
     * The type of function. This determines when the function will be called.
     */
    functionType: PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum;
}
export declare class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    actionFunctionIdentifier?: shared.ActionFunctionIdentifier;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
