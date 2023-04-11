import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A response returned by the connection after executing the sql query.
 */
export declare class ExecuteSqlQueryResponse extends SpeakeasyBase {
    /**
     * In the case of successful execution of the query the response contains results returned by the external system. For example, the result rows of the query are contained in the 'results' Struct list - "results": [ { "field1": "val1", "field2": "val2",.. },.. ] Each Struct row can contain fields any type of like nested Structs or lists.
     */
    results?: Record<string, any>[];
}
