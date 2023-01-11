import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSparqlQueryPathParams extends SpeakeasyBase {
    query: string;
}
export declare class GetSparqlQueryRequest extends SpeakeasyBase {
    pathParams: GetSparqlQueryPathParams;
}
export declare class GetSparqlQueryResponse extends SpeakeasyBase {
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
}
