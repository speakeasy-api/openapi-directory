import { SpeakeasyBase } from "../../../internal/utils";
export declare class GraphQlRequest extends SpeakeasyBase {
    operationName?: string;
    query: string;
    variables?: Record<string, any>;
}
