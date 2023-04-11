import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for ActionService.ExecuteAction
 */
export declare class ExecuteActionResponse extends SpeakeasyBase {
    /**
     * In the case of successful invocation of the specified action, the results Struct contains values based on the response of the action invoked. 1. If the action execution produces any entities as a result, they are returned as an array of Structs with the 'key' being the field name and the 'value' being the value of that field in each result row. { 'results': [{'key': 'value'}, ...] }
     */
    results?: Record<string, any>[];
}
