import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of function. This determines when the function will be called.
 */
export declare enum ActionFunctionIdentifierFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION",
    PreFetchOptions = "PRE_FETCH_OPTIONS",
    PostFetchOptions = "POST_FETCH_OPTIONS"
}
/**
 * A serverless function associated with this custom workflow action.
 */
export declare class ActionFunctionIdentifier extends SpeakeasyBase {
    /**
     * The type of function. This determines when the function will be called.
     */
    functionType: ActionFunctionIdentifierFunctionTypeEnum;
    /**
     * The ID qualifier for the function. This is used to specify which input field a function is associated with for `PRE_FETCH_OPTIONS` and `POST_FETCH_OPTIONS` function types.
     */
    id?: string;
}
